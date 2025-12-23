import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import ShipImage from './ShipImage';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ShipDisplay({ raceBattleQuantities, raceOrder, setRaceOrder }) {

    const [raceQuantityList, setRaceQuantityList] = useState([]);

    useEffect(() => {
        setRaceQuantityList(
            Object.entries(raceBattleQuantities).filter(
                tup => Object.values(tup[1]).some(el => el != 0)
            ).toSorted((a, b) => raceOrder.indexOf(a[0]) - raceOrder.indexOf(b[0]))
        );
        console.log(raceQuantityList);
    }, [raceBattleQuantities])

    return (
        <div className="eclipse-battle-display">
            {raceQuantityList.map(raceTup => <div className="eclipse-battle-display-col" draggable={true}>
                {Object.entries(raceTup[1]).map(shipTup => <div className="eclipse-battle-display-ship-category">
                    {[...Array(shipTup[1])].map((_, i) => <ShipImage race={raceTup[0]} shipType={shipTup[0]} />)}
                </div>)}
            </div>)}
        </div>
    );
}

export default ShipDisplay;