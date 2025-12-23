import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import ShipCounter from './ShipCounter';
import RaceSelector from './RaceSelector';
import ResultsOverview from './ResultsOverview';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ShipDisplay from './ShipDisplay';

function BattleMenu({ races, shipSpecs, raceToColor, raceOrder, setRaceOrder, raceBattleQuantities, setRaceBattleQuantities, initialRaceBattleQuantities }) {

    const playerShipTypes = ['interceptor', 'cruiser', 'dreadnought', 'starbase'];
    const npcShipTypes = ['ancient', 'guardian', 'gcds'];

    const [summaryStats, setSummaryStats] = useState(null);
    const [allStats, setAllStats] = useState(null);

    const [selectedRace, setSelectedRace] = useState("Mechanema");

    function selectRace(race) {
        setSelectedRace(race);
    }

    const workerRef = useRef(null);

    const [progress, setProgress] = useState(0);

    function startWorker() {
        workerRef.current?.terminate();

        const worker = new Worker(
            new URL('./battleWorker.js', import.meta.url)
        );

        workerRef.current = worker;

        worker.onmessage = (e) => {
            switch (e.data.type) {
            case 'PROGRESS':
                setProgress(e.data.percent);
                console.log(e.data.percent);
                break;
            case 'DONE':
                setProgress(100);
                setAllStats(e.data.allStats);
                setSummaryStats(e.data.summaryStats);
                break;
            }
        };

        worker.postMessage({
            type: 'START',
            raceOrder: raceOrder,
            raceBattleQuantities: raceBattleQuantities,
            shipSpecs: shipSpecs,
        });

        // progress notes
        // each battle will take X rounds, where X is the total HP of all ships involved
        // how many battles?
        // for two parties: 1 battle
        // for three parties: first battle has N results, where N is the total number of ships involved
        // for four parties: first battle, then second runs N1 times, then third runs N2 times
        // send along: total battle count, this battle index, this round index
    }
    
    async function actionButton() {
        if (allStats == null) {
            if (Object.values(raceBattleQuantities).map(raceMap => Object.values(raceMap).reduce((acc, item) => acc + item, 0)).filter(qty => qty > 0).length <= 1) {
                return;
            }
            setAllStats(false);
            startWorker({});
        } else if (allStats == false) {
            workerRef.current?.terminate();
            setAllStats(null);
        }
        else {
            setAllStats(null);
            setSummaryStats(null);
        }
    }

    function clearDisplay() {
        setRaceOrder([]);
        setRaceBattleQuantities(initialRaceBattleQuantities);
    }

    return (
        <div className="eclipse-battle-layout">
            <div className="eclipse-battle-shipzone-container">
                <div className="eclipse-battle-order-indicator">
                    <div className="eclipse-battle-order-indicator-text">Newest</div>
                    <div className="eclipse-battle-order-indicator-bar"></div>
                    <div className="eclipse-battle-order-indicator-text">Oldest</div>
                </div>
                <div className="eclipse-battle-shipzone">
                    <ShipDisplay raceBattleQuantities={raceBattleQuantities} raceOrder={raceOrder} setRaceOrder={setRaceOrder} />
                </div>
                <div className="eclipse-battle-buttons">
                    <div className="eclipse-battle-actionbutton" onClick={actionButton}>
                        {allStats != null ? (allStats == false ? "Cancel Calculation" : "New Battle") : "Calculate Outcomes"}
                    </div>
                    <div className="eclipse-battle-display-clear" onClick={clearDisplay}>
                        Clear Ships
                    </div>
                </div>
            </div>
            {allStats == null ?
                <div className="eclipse-battle-selectships">
                    <RaceSelector races={races} selectedRace={selectedRace} selectRace={selectRace} />
                    {(selectedRace === "NPC" ? npcShipTypes : playerShipTypes).map(
                        shipType => <ShipCounter shipType={shipType} race={selectedRace} raceBattleQuantities={raceBattleQuantities} setRaceBattleQuantities={setRaceBattleQuantities} raceOrder={raceOrder} setRaceOrder={setRaceOrder} />
                    )}
                </div>
                :
                <div className="eclipse-battle-results">
                    {allStats == false ? 
                        <div className="eclipse-battle-results-waiting" />
                    :
                        <ResultsOverview summaryStats={summaryStats} allStats={allStats} raceToColor={raceToColor} />
                    }
                </div>
            }
            
        </div>
    );
}

export default BattleMenu;