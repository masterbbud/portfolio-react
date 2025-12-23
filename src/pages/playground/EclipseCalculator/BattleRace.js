import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function BattleRace({ race, shipTypes, raceBattleQuantities, setRaceBattleQuantities }) {

    const maxQuantitiesPerType = {
        interceptor: 8,
        cruiser: 4,
        dreadnought: 2,
        starbase: 4,
        ancient: 2,
        guardian: 1,
        gcds: 1
    }

    return (
        <div className="eclipse-battle-race">
            <div className="eclipse-battle-race-title">
                {race.name}
            </div>
            <div className="eclipse-battle-race-buttons">
                {shipTypes.map(shipType => <div className="eclipse-battle-race-shiptype">
                    <div className={`eclipse-battle-race-quantitychange${raceBattleQuantities[race.name][shipType] <= 0 ? " disabled" : ""}`}>-</div>
                    <div className="eclipse-battle-race-shiptype-text">{shipType}</div>
                    <div className={`eclipse-battle-race-quantitychange${raceBattleQuantities[race.name][shipType] >= maxQuantitiesPerType[shipType] ? " disabled" : ""}`}>+</div>
                </div>)}
            </div>
        </div>
    );
}

export default BattleRace;