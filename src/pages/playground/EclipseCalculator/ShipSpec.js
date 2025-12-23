import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import TileSlot from './TileSlot';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import AlertIcon from './assets/misc/warning.png';
import AncientBaseTile from './assets/npctiles/ancientbase.png';
import AncientAdvancedTile from './assets/npctiles/ancientadvanced.png';
import GuardianBaseTile from './assets/npctiles/guardianbase.png';
import GuardianAdvancedTile from './assets/npctiles/guardianadvanced.png';
import GCDSBaseTile from './assets/npctiles/gcdsbase.png';
import GCDSAdvancedTile from './assets/npctiles/gcdsadvanced.png';

import OneEnergyBonus from './assets/shipspec/1energybonus.png';
import OneEnergyBonusFlipped from './assets/shipspec/1energybonusflipped.png';
import TwoEnergyBonus from './assets/shipspec/2energybonus.png';
import ThreeEnergyBonus from './assets/shipspec/3energybonus.png';
import OneInitiative from './assets/shipspec/1initiative.png';
import TwoInitiative from './assets/shipspec/2initiative.png';
import ThreeInitiative from './assets/shipspec/3initiative.png';
import FourInitiative from './assets/shipspec/4initiative.png';
import FiveInitiative from './assets/shipspec/5initiative.png';
import PlantaBonusTwo from './assets/shipspec/plantabonus2.png';
import PlantaBonusFive from './assets/shipspec/plantabonus5.png';

function ShipSpec({ playerId, shipType, shipClass, tiles, stats, selectedTile, setSelectedTile, setNpcClass }) {

    const shipTypeToConfig = {
        "interceptor": [1, 2, 1],
        "cruiser": [2, 2, 2],
        "dreadnought": [2, 2, 2, 2],
        "starbase": [2, 1, 2]
    }

    const baseTiles = {
        "interceptor": {
            1: {
                0: {image: TwoInitiative, direction: 'right'}
            }
        },
        "cruiser": {
            1: {
                0: {image: OneInitiative, direction: 'right'}
            }
        },
        "starbase": {
            2: {
                0: {image: FourInitiative, direction: 'right'}
            },
            1: {
                0: {image: ThreeEnergyBonus, direction: 'bottom'}
            }
        }
    };

    const bonusTiles = {
        "Mechanema": baseTiles,
        "Orion Hegemony": {
            "interceptor": {
                0: {
                    0: {image: OneEnergyBonusFlipped, direction: 'top'}
                },
                1: {
                    0: {image: ThreeInitiative, direction: 'right'}
                }
            },
            "cruiser": {
                1: {
                    0: {image: TwoInitiative, direction: 'right'},
                    1: {image: TwoEnergyBonus, direction: 'bottom'}
                },
            },
            "dreadnought": {
                2: {
                    0: {image: OneInitiative, direction: 'right'},
                    1: {image: ThreeEnergyBonus, direction: 'bottomleft'}
                },
            },
            "starbase": {
                1: {
                    0: {image: ThreeEnergyBonus, direction: 'bottom'}
                },
                2: {
                    0: {image: FiveInitiative, direction: 'right'}
                }
            }
        },
        "Descendants of Draco": baseTiles,
        "Hydran Progress": baseTiles,
        "Eridani Empire": {
            "interceptor": {
                0: {
                    0: {image: OneEnergyBonusFlipped, direction: 'top'}
                },
                1: {
                    0: {image: TwoInitiative, direction: 'right'}
                }
            },
            "cruiser": {
                1: {
                    0: {image: OneInitiative, direction: 'right'},
                    1: {image: OneEnergyBonus, direction: 'bottom'}
                },
            },
            "dreadnought": {
                2: {
                    1: {image: OneEnergyBonus, direction: 'bottomleft'}
                },
            },
            "starbase": {
                1: {
                    0: {image: ThreeEnergyBonus, direction: 'bottom'}
                },
                2: {
                    0: {image: FourInitiative, direction: 'right'}
                }
            }
        },
        "Planta": {
            "interceptor": {
                1: {
                    1: {image: PlantaBonusTwo, direction: 'replace'}
                },
            },
            "cruiser": {
                0: {
                    1: {image: PlantaBonusTwo, direction: 'replace'}
                },
            },
            "dreadnought": {
                0: {
                    1: {image: PlantaBonusTwo, direction: 'replace'}
                },
            },
            "starbase": {
                0: {
                    1: {image: PlantaBonusFive, direction: 'replace'}
                },
                2: {
                    0: {image: TwoInitiative, direction: 'right'}
                }
            }
        }
    }

    const npcShipImages = {
        "ancient": {
            "base": AncientBaseTile,
            "advanced": AncientAdvancedTile,
        },
        "guardian": {
            "base": GuardianBaseTile,
            "advanced": GuardianAdvancedTile,
        },
        "gcds": {
            "base": GCDSBaseTile,
            "advanced": GCDSAdvancedTile,
        }
    }

    const [tilesPerRow, setTilesPerRow] = useState([]);

    function computeTilesPerRow() {
        let newTiles = [];
        let index = 0;
        for (let column of shipTypeToConfig[shipType]) {
            let thisColumn = [];
            for (let i = 0; i < column; i ++) {
                thisColumn.push({i: index, tileData: tiles[index]});
                index ++;
            }
            newTiles.push(thisColumn);
        }
        return newTiles;
    }

    function clickNpcShipClass(shipClass) {
        setNpcClass(shipType, shipClass);
    }

    useEffect(() => {
        if (playerId !== "NPC") {
            setTilesPerRow(computeTilesPerRow());
        }
    }, [tiles]);

    return (
        <div className="eclipse-shipspec">
            <div className="eclipse-shipspec-title">
                <span>{shipType.toUpperCase()}</span>
                {shipClass ? 
                    <span className="eclipse-shipspec-subtitle">{shipClass.toUpperCase()} CLASS</span>
                :
                    <span></span>
                }
            </div>
            <div className="eclipse-shipspec-cols-container">
                { playerId === "NPC" ?
                    <div className="eclipse-shipspec-cols-npc">
                        {Object.entries(npcShipImages[shipType]).map(
                                ([sc, image], i) => <img src={image} className={sc === shipClass ? "eclipse-shipspec-npc-selected" : ""} key={i} onClick={() => clickNpcShipClass(sc)} />
                            )
                        }
                    </div>
                :
                    <div className={`eclipse-shipspec-cols eclipse-shipspec-${shipType}`}>
                        {tilesPerRow.map((col, i) => <div key={i} className="eclipse-shipspec-column">
                            {col.map((tile, j) => <TileSlot key={`${i}-${j}`} playerId={playerId} shipType={shipType} indexOfSpec={tile.i} tileData={tile.tileData} selectedTile={selectedTile} setSelectedTile={setSelectedTile} attachedBonus={bonusTiles?.[playerId]?.[shipType]?.[i]?.[j]} /> )}
                        </div>)}
                    </div>
                }
                
            </div>
            <div className="eclipse-shipspec-warning" style={{display: stats.cost > stats.energy ? "flex" : "none"}}>
                <img src={AlertIcon} />
                <span>
                    Consuming <b>{stats.cost}</b> energy, but producing <b>{stats.energy}</b>
                </span>
            </div>
        </div>
    );
}

export default ShipSpec;