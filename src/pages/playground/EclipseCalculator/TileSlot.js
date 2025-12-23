import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function TileSlot({ playerId, shipType, indexOfSpec, tileData, selectedTile, setSelectedTile, attachedBonus }) {

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        console.log(selectedTile);
        if (! selectedTile) { setSelected(false); return; }
        setSelected(selectedTile.playerId === playerId && selectedTile.shipType === shipType && selectedTile.index === indexOfSpec);
    }, [selectedTile, shipType, playerId]);

    function selectThis() {
        if (attachedBonus && attachedBonus.direction === "replace") {
            return;
        }
        setSelectedTile({playerId: playerId, shipType: shipType, index: indexOfSpec});
    }

    return (
        <div className={`eclipse-tile${selected ? " eclipse-tile-selected" : ""}${attachedBonus && attachedBonus.direction === "replace" ? " eclipse-tile-hidden" : ""}`} onClick={selectThis} >
            {tileData && ! (attachedBonus && attachedBonus.direction === "replace") ? <img src={tileData.image} /> : <div></div>}
            {attachedBonus ? <img src={attachedBonus.image} className={`eclipse-tile-bonus eclipse-tile-bonus-${attachedBonus.direction}`} /> : <div></div>}
        </div>
    );
}

export default TileSlot;