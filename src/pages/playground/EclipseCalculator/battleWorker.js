var raceOrder = null;
var raceBattleQuantities = null;
var shipSpecs = null;

onmessage = (e) => {
  if (e.data.type === 'START') {
    raceOrder = e.data.raceOrder;
    raceBattleQuantities = e.data.raceBattleQuantities;
    shipSpecs = e.data.shipSpecs;

    const [summaryStats, allStats] = computeResults();
    postMessage({ type: 'DONE', summaryStats: summaryStats, allStats: allStats });
  }
};

function computeResults() {
    rollProbabilitiesCache = {};

    let results = computeResultsRecursive(computeShipsForRace(raceOrder[0]), 1);
    if (results.length == 0) {
        // no battle to be had
        return null, null; // also send flag of error
    }
    if (results[0][0] == null) {
        return null, null; // also send flag of cancel
    }
    // merge results based on damage
    let mergedResults = mergeStates(results, false)
        .map(stateProb => [
            stateProb[0].map(group => { return {...group, ships: group.ships.length}}),
            stateProb[1]
        ]
    );
    // calculate summary percentages
    let summaryProbs = mergedResults.reduce((acc, item) => {
        const race = item[0][0].playerId;
        acc[race] ??= 0;
        acc[race] += item[1];
        return acc;
    }, {});
    summaryProbs = Object.entries(summaryProbs).toSorted((a, b) => b[1] - a[1]);
    mergedResults.sort((a, b) => b[1] - a[1]); // sort by chance of occurrence
    return [summaryProbs, mergedResults]
}

function computeResultsRecursive(state, defenderIdx) {
    // returns a list of stateprobs
    let defenderRace = raceOrder[defenderIdx];
    let defenderShips = computeShipsForRace(defenderRace);
    let attackerShips = state;
    let allShips = [...defenderShips, ...attackerShips];
    allShips.sort((a, b) => b.initiative - a.initiative);
    let missileProbs = computeMissiles(allShips, 0);
    let resultProbs = computeRound(missileProbs);
    if (resultProbs == null) {
        return [[null, 0]];
    }
    if (defenderIdx == raceOrder.length - 1) {
        return resultProbs;
    }
    return resultProbs.map(([substate, prob]) => computeResultsRecursive(substate, defenderIdx + 1).map(([rState, rProb]) => [rState, rProb * prob])).flat();
}

function computeShipsForRace(race) {
    let ships = []
    const quantities = raceBattleQuantities[race];
    for (let [shipType, quantity] of Object.entries(quantities)) {
        if (quantity > 0) {
            let shipStats = getShipStats(race, shipType);
            ships.push({shipType: shipType, playerId: race, ships: Array(quantity).fill(shipStats.hull + 1), initiative: shipStats.initiative + 0.1 * raceOrder.indexOf(race)})
        }
    }
    return ships;
}

function computeRound(stateProbs) {
    // state looks like [{shipType: X, playerId: X, ships: [1, 3, 2]}] in turn order
    // TODO make sure "ships" is always in ascending order
    let remainingStates = []
    let keepBattling = false;
    for (let [state, prob] of stateProbs) {
        if (checkIsOneSided(state)) {
            remainingStates.push([state, prob]);
            continue;
        }
        keepBattling = true;
        let results = computeStateSnapshot(state, 0); // consider copying state
        if (results.length == 0 || results[0][0] == null) {
            return null;
        }
        // returns list of [[state, prob]]
        let validResults = [];
        let validProbability = 0;
        // TODO handle case where there are NO valid results (nobody alive has any cannons)
        for (let result of results) {
            if (!checkEquality(state, result[0])) {
                validResults.push(result);
                validProbability += result[1];
            }
        }
        let probScalar = (1 / validProbability) * prob;
        for (let result of validResults) {
            result[1] *= probScalar;
        }
        remainingStates = remainingStates.concat(validResults);
    }
    remainingStates = mergeStates(remainingStates);
    if (!keepBattling) {
        return remainingStates;
    }
    return computeRound(remainingStates);
}

function mergeStates(stateProbs, checkSpecificShips = true) {
    return stateProbs.reduce((acc, stateProb) => {
        const existing = acc.find(x => checkEquality(x[0], stateProb[0], checkSpecificShips));
        if (existing) {
            existing[1] += stateProb[1];
        } else {
            acc.push([...stateProb]);
        }
        return acc;
    }, []);
}

function checkEquality(s1, s2, checkSpecificShips = true) {
    if (s1.length != s2.length) {
        return false;
    }
    let idx = 0;
    let s1ships;
    let s2ships;
    while (true) {
        if (idx >= s1.length) {
            return true;
        }
        if (s1[idx].shipType != s2[idx].shipType || s1[idx].playerId != s2[idx].playerId) {
            return false;
        }
        s1ships = s1[idx].ships;
        s2ships = s2[idx].ships
        if (s1ships.length != s2ships.length) {
            return false;
        }
        if (checkSpecificShips) {
            for (let i = 0; i < s1ships.length; i ++) {
                if (s1ships[i] != s2ships[i]) {
                    return false;
                }
            }
        }
        idx ++;
    }
}

function checkIsOneSided(state) {
    let firstPlayerId = state[0].playerId;
    for (let group of state) {
        if (group.playerId != firstPlayerId) {
            return false;
        }
    }
    return true;
}

function computeStateSnapshot(state, index) {
    // returns a list of stateProb tuples
    if (stopCalculatingFlag) {
        return [[null, 0]];
    }
    if (index >= state.length) {
        return [[state, 1]];
    }
    let player = state[index].playerId;
    let shieldOptions = [...new Set(state.filter(group => group.playerId != player).map(group => getShipStats(group.playerId, group.shipType).shields))].toSorted();
    let shipStats = getShipStats(player, state[index].shipType);
    let rolls = computeRollProbabilities(shipStats.weapons, shipStats.computers, state[index].ships.length, shieldOptions);
    if (rolls.length == 0) {
        return computeStateSnapshot(state, index + 1).map(([rState, rProb]) => [rState, rProb]);
    }
    let resultProbs = rolls.map(([roll, prob]) => [computeDamage(state, player, roll), prob]);
    resultProbs = mergeStates(resultProbs);
    return resultProbs.map(([substate, prob]) => computeStateSnapshot(substate, index + 1).map(([rState, rProb]) => [rState, rProb * prob])).flat();
}

function computeMissiles(state, index) {
    if (stopCalculatingFlag) {
        return [[null, 0]];
    }
    let missileGroups = state.filter(group => getShipStats(group.playerId, group.shipType).missiles.length > 0);
    if (index >= missileGroups.length) {
        return [[state, 1]];
    }
    let player = missileGroups[index].playerId;
    let shieldOptions = [...new Set(state.filter(group => group.playerId != player).map(group => getShipStats(group.playerId, group.shipType).shields))].toSorted();
    let shipStats = getShipStats(player, missileGroups[index].shipType);
    let rolls = computeRollProbabilities(shipStats.missiles, shipStats.computers, missileGroups[index].ships.length, shieldOptions);
    let resultProbs = rolls.map(([roll, prob]) => [computeDamage(state, player, roll), prob]);
    resultProbs = mergeStates(resultProbs);
    return resultProbs.map(([substate, prob]) => computeMissiles(substate, index + 1).map(([rState, rProb]) => [rState, rProb * prob])).flat();
}

var rollProbabilitiesCache = {};
var stopCalculatingFlag = false;

function computeRollProbabilities(dice, computers, qty, shieldOptions) {
    // returns a list of [[roll, prob], ...] where roll is {shieldVal: [1, 4], ...} in descending order
    // second value of each tuple is the number of shields that it hits on. Anything that will never hit is dropped.
    if (dice.length == 0) {
        return [];
    }
    let shieldOptionsStr = JSON.stringify(shieldOptions);
    let diceStr = JSON.stringify(dice);
    if (rollProbabilitiesCache?.[diceStr]?.[computers]?.[qty]?.[shieldOptionsStr]) {
        return rollProbabilitiesCache[diceStr][computers][qty][shieldOptionsStr];
    }
    let totalDice = [].concat(...Array(qty).fill(dice))

    let hitProbabilities = {}
    let probConsumed = 0;
    for (let shield of shieldOptions.toReversed()) {
        let thisProb = (clamp(computers - shield, 0, 4) + 1);
        hitProbabilities[shield] = (thisProb - probConsumed) / 6;
        probConsumed = thisProb;
    }
    hitProbabilities[-1] = (6 - probConsumed) / 6;

    let rolls = rollAllColors(totalDice, Object.keys(hitProbabilities), Object.values(hitProbabilities));
    rolls = [...rolls.entries()].map(([key, value]) => {
        let reversedKey = reverseKey(key);
        delete reversedKey[-1];
        return [reversedKey, value]
    });

    rollProbabilitiesCache[diceStr] ??= {};
    rollProbabilitiesCache[diceStr][computers] ??= {};
    rollProbabilitiesCache[diceStr][computers][qty] ??= {};
    rollProbabilitiesCache[diceStr][computers][qty][shieldOptionsStr] = rolls;

    return rolls;
}

// consider caching?
function rollAllColors(diceByColor, faces, probs) {
    const results = new Map(); // canonicalKey -> probability

    function rec(i, byValue, p) {
        if (i === diceByColor.length) {
            const key = canonicalKey(byValue);
            results.set(key, (results.get(key) ?? 0) + p);
            return;
        }

        const color = diceByColor[i];

        for (let f = 0; f < faces.length; f++) {
            const value = faces[f];
            const prob = probs[f];

            const list = byValue.get(value) ?? [];
            byValue.set(value, [...list, color]);

            rec(i + 1, byValue, p * prob);

            if (list.length === 0) byValue.delete(value);
            else byValue.set(value, list);
        }
    }

    rec(0, new Map(), 1);
    return results;
}

function canonicalKey(map) {
    return [...map.entries()]
        .sort(([a], [b]) => a - b)
        .map(([v, colors]) =>
        `${v}:${colors.slice().sort().join(",")}`
        )
        .join("|");
}

function reverseKey(key) {
    return Object.fromEntries(
        key.split("|")
            .map(face => [
                face.split(":")[0],
                face.split(":")[1].split(",").map(value => parseInt(value))
            ])
    );
}

function clamp(a, low, high) {
    return Math.min(Math.max(a, low), high);
}

function computeDamage(state, playerId, roll) {
    // playerId is the one doing the damage
    let diceList = Object.entries(roll).map(([maxShields, dice]) => dice.map(die => [parseInt(maxShields), die])).flat();
    let localState = structuredClone(state);
    localState = localState.map(group => { return {...group, shields: getShipStats(group.playerId, group.shipType).shields}});
    let allDamageOptions = getDamageOptions(localState, playerId, 0, diceList, 0, 0);
    allDamageOptions.sort((a, b) => b[2] - a[2]); // descending by damage
    allDamageOptions.sort((a, b) => b[1] - a[1]); // descending by kills
    return allDamageOptions[0][0];
}

function getDamageOptions(state, playerId, dieIdx, diceList, kills, damage) {
    // if no rolls left, return state
    if (dieIdx >= diceList.length) {
        return [[state, kills, damage]];
    }
    let die = diceList[dieIdx];
    let stateOptions = [];
    // return the combination of getDamageOptions for each possible target and the next die
    let foundAny = false;
    for (let groupIdx = 0; groupIdx < state.length; groupIdx ++) {
        let group = state[groupIdx];
        if (group.playerId == playerId || group.shields > die[0]) {
            continue;
        }
        foundAny = true;
        let foundHp = new Set(); // all ships with the same hp are the same, so don't distinguish between them
        for (let shipIdx = 0; shipIdx < group.ships.length; shipIdx ++) {
            let newState = structuredClone(state);
            if (foundHp.has(newState[groupIdx].ships[shipIdx])) {
                continue;
            }
            foundHp.add(newState[groupIdx].ships[shipIdx]);
            if (die[1] >= newState[groupIdx].ships[shipIdx]) {
                let damageDealt = newState[groupIdx].ships[shipIdx];
                newState[groupIdx].ships.splice(shipIdx, 1);
                if (newState[groupIdx].ships.length == 0) {
                    newState.splice(groupIdx, 1);
                }
                stateOptions = stateOptions.concat(getDamageOptions(newState, playerId, dieIdx + 1, diceList, kills + 1, damage + damageDealt));
            }
            else {
                newState[groupIdx].ships[shipIdx] -= die[1];
                stateOptions = stateOptions.concat(getDamageOptions(newState, playerId, dieIdx + 1, diceList, kills, damage + die[1]));
            }
        }
    }
    if (!foundAny) {
        return [[state, kills, damage]];
    }
    return stateOptions;
}

function getShipStats(playerId, shipType) {
    return shipSpecs[playerId].find(ship => ship.type == shipType).stats;
}