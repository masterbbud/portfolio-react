import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ShipCounter({ shipType, race, raceBattleQuantities, setRaceBattleQuantities, raceOrder, setRaceOrder }) {

    const maxQuantitiesPerType = {
        interceptor: 8,
        cruiser: 4,
        dreadnought: 2,
        starbase: 4,
        ancient: 2,
        guardian: 1,
        gcds: 1
    }

    function changeQuantity(delta) {
        console.log(raceBattleQuantities);
        if (raceBattleQuantities[race][shipType] + delta < 0 || raceBattleQuantities[race][shipType] + delta > maxQuantitiesPerType[shipType]) {
            return;
        }
        let newRaceBattleQuantities = {...raceBattleQuantities};
        newRaceBattleQuantities[race][shipType] += delta;
        setRaceBattleQuantities(newRaceBattleQuantities);

        if (newRaceBattleQuantities[race][shipType] > 0 && !raceOrder.includes(race)) {
            raceOrder.push(race);
            setRaceOrder([...raceOrder]);
            console.log(raceOrder);
        }

        if (!Object.values(newRaceBattleQuantities[race]).filter(shipType => shipType != 0).length && raceOrder.includes(race)) {
            raceOrder.splice(raceOrder.indexOf(race), 1)
            setRaceOrder([...raceOrder]);
            console.log(raceOrder);
        }
    }

    function capitalized(string) {
        if (string === "gcds") { return "GCDS"; }
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="eclipse-battle-race-shiptype">
            <div className={`eclipse-battle-race-quantitychange${raceBattleQuantities[race][shipType] <= 0 ? " disabled" : ""}`} onClick={() => changeQuantity(-1)}>-</div>
            <div className="eclipse-battle-race-shiptype-text">{capitalized(shipType)}</div>
            <div className={`eclipse-battle-race-quantitychange${raceBattleQuantities[race][shipType] >= maxQuantitiesPerType[shipType] ? " disabled" : ""}`} onClick={() => changeQuantity(1)}>+</div>
        </div>
    );
}

export default ShipCounter;