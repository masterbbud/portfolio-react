import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function RaceSelector({ races, selectedRace, selectRace }) {

    return (
        <div className="eclipse-player-select">
            {races.map((race, i) => <div key={i} className={`eclipse-player-select-item${race.name === selectedRace ? " eclipse-player-select-item-selected" : ""}`} onClick={() => selectRace(race.name)}>
                <img src={race.image} className="eclipse-player-select-image" />
            </div>)}
        </div>
    );
}

export default RaceSelector;