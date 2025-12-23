import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import ShipSpec from './ShipSpec';
import TileLibrary from './TileLibrary';
import BattleRace from './BattleRace';
import RaceSelector from './RaceSelector';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function EditMenu({ races, shipSpecs, setShipSpecs, tiles, baseShipsPerRace, npcShipOptions }) {

    const [players, setPlayers] = useState([]);
    const [gameState, setGameState] = useState([]);

    const [renderedPlayer, setRenderedPlayer] = useState('Mechanema');
    const [renderedShip, setRenderedShip] = useState(0);

    const [selectedTile, setSelectedTile] = useState(null); // {playerId, shipType, index}

    function selectLibraryTile(tileData) {
        if (selectedTile === null) { return; }
        let shipSpec = shipSpecs[selectedTile.playerId].filter(
            ship => ship.type === selectedTile.shipType
        )[0];
        shipSpec.tiles[selectedTile.index] = tileData;
        shipSpec.tiles = [...shipSpec.tiles];
        recomputeShipSpec(shipSpec, selectedTile.playerId);
        setShipSpecs({...shipSpecs});
        return;
    }

    function recomputeShipSpec(shipSpec, race) {
        let newStats = structuredClone(baseShipsPerRace[race].find(ship => ship.type === shipSpec.type).stats);
        for (let tile of shipSpec.tiles) {
            if (tile === null) {
                continue;
            }
            newStats.energy += tile.energy;
            newStats.hull += tile.hull;
            newStats.drive += tile.drive;
            newStats.computers += tile.computers;
            newStats.shields += tile.shields;
            newStats.cost += tile.cost;
            newStats.initiative += tile.initiative;
            newStats.weapons.push(...tile.weapons);
            newStats.missiles.push(...tile.missiles);
        }
        shipSpec.stats = newStats;
    };

    function paginateShipSpecs(delta) {
        if (renderedShip + delta < 0 || renderedShip + delta >= shipSpecs[renderedPlayer].length) {
            return;
        }
        setRenderedShip(renderedShip + delta);
        setSelectedTile(null);
    }

    function selectRace(race) {
        if ((race === "NPC") != (renderedPlayer === "NPC")) {
            setRenderedShip(0);
        }
        setRenderedPlayer(race);
        setSelectedTile(null);
    }

    function setNpcClass(shipType, shipClass) {
        let idx = shipSpecs["NPC"].findIndex(ship => ship.type === shipType);
        shipSpecs["NPC"][idx] = npcShipOptions[shipType][shipClass];
        setShipSpecs({...shipSpecs});
    }

    useEffect(() => {
        for (let [race, shipSpecList] of Object.entries(shipSpecs)) {
            for (let shipSpec of shipSpecList) {
                recomputeShipSpec(shipSpec, race);
            }
        }
    }, []);

    return (
        <div className="eclipse-edit-layout">
            <div className="eclipse-shipspecs">
                <RaceSelector races={races} selectedRace={renderedPlayer} selectRace={selectRace} />
                <div className="eclipse-shipspec-view">
                    <div className={`eclipse-arrow eclipse-arrow-left${renderedShip === 0 ? " eclipse-arrow-disabled" : ""}`} onClick={() => paginateShipSpecs(-1)} >{"<"}</div>
                    <div className="eclipse-shipspec-center">
                        <ShipSpec playerId={renderedPlayer} shipType={shipSpecs[renderedPlayer][renderedShip].type} shipClass={shipSpecs[renderedPlayer][renderedShip].class} tiles={shipSpecs[renderedPlayer][renderedShip].tiles} stats={shipSpecs[renderedPlayer][renderedShip].stats} selectedTile={selectedTile} setSelectedTile={setSelectedTile} setNpcClass={setNpcClass} />
                    </div>
                    <div className={`eclipse-arrow eclipse-arrow-right${renderedShip === shipSpecs[renderedPlayer].length - 1 ? " eclipse-arrow-disabled" : ""}`} onClick={() => paginateShipSpecs(1)} >{">"}</div>
                </div>
            </div>
            <div className="eclipse-tilelibrary">
                <TileLibrary tileDataList={tiles} selectLibraryTile={selectLibraryTile} shipSpecs={shipSpecs} />
            </div>
        </div>
    );
}

export default EditMenu;