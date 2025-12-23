import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import ShipImage from './ShipImage';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function ResultsOverview({ summaryStats, allStats, raceToColor }) {

    return (
        <div className="eclipse-battle-results-container" >
            <div className="eclipse-battle-results-summary">
                <h2 style={{marginTop: "0.4em"}}>
                    Results Summary
                </h2>
                <div className="eclipse-battle-results-overview-bar">
                    {summaryStats.map(([race, pct]) => <div className="eclipse-battle-results-overview-bar-part" style={{backgroundColor: `rgb(${raceToColor[race]})`, flex: pct}}>
                        <div style={{color: race === "Mechanema" || race === "Descendants of Draco" ? "black" : "white"}}>{Math.round(pct * 100)}%</div>
                        <div className="eclipse-battle-results-overview-bar-race">{race}</div>
                    </div>)}
                </div>
            </div>
            <div className="eclipse-battle-results-individual">
                <h2>
                    Individual Results
                </h2>
                {allStats.map(([state, pct]) => <div className="eclipse-battle-results-individual-card" style={{backgroundColor: `rgba(${raceToColor[state[0].playerId]}, 0.5)`}}>
                    <div className="eclipse-battle-results-individual-card-header">
                        <div>{state[0].playerId}</div>
                        <div className="eclipse-battle-results-individual-card-percent">{(pct * 100).toFixed(3)}%</div>
                    </div>
                    <div>
                        {state.flatMap((group, i) =>
                            [...Array(group.ships)].map((_, j) => <ShipImage key={`${i}-${j}`} race={state[0].playerId} shipType={group.shipType} /> )
                        )}
                    </div>
                </div>)}
            </div>
        </div>
    );
}

export default ResultsOverview;