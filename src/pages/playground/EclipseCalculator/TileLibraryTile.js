import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function TileLibraryTile({ tileData, selectLibraryTile }) {

    function selectThis() {
        selectLibraryTile(tileData);
    }

    return (
        <div className={`eclipse-tile${tileData == null ? " eclipse-tile-clear" : ""}`} onClick={selectThis} >
            {tileData == null ?
                <div>
                    <div className="eclipse-tile-x">X</div>
                    <div>Clear</div>
                </div>
                :
                <img src={tileData.image} />
            }
        </div>
    );
}

export default TileLibraryTile;