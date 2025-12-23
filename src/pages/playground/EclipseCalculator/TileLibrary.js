import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import TileLibraryTile from './TileLibraryTile';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import SortIcon from './assets/misc/sort.png';

function TileLibrary({ tileDataList, selectLibraryTile, shipSpecs }) {

    const [tileResults, setTileResults] = useState(tileDataList);

    const [sortMode, setSortMode] = useState('category');

    const numericalFieldRank = ["energy", "hull", "computers", "shields", "drive"];

    useEffect(() => {
        if (sortMode === "alphabetical") {
            setTileResults([...tileDataList]);
        }
        else if (sortMode === "category") {
            setTileResults(tileDataList.toSorted((a, b) => {
                console.log('huh');
                let aRank = 0;
                let bRank = 0;
                let overallRank = 120;
                for (let rank of numericalFieldRank.toReversed()) {
                    if (aRank == 0 && a[rank] > 0) { aRank = overallRank + a[rank] }
                    if (bRank == 0 && b[rank] > 0) { bRank = overallRank + b[rank] }
                    overallRank -= 20;
                }
                if (a.weapons.length > 0) {
                    aRank = a.weapons[0] * 4
                }
                if (a.missiles.length > 0) {
                    aRank = a.missiles[0] * 4 + 1
                }
                if (b.weapons.length > 0) {
                    bRank = b.weapons[0] * 4
                }
                if (b.missiles.length > 0) {
                    bRank = b.missiles[0] * 4 + 1
                }
                return aRank - bRank;
            }));
        }
        else if (sortMode === "recents") {
            setTileResults(
                [...new Map(
                    Object.values(shipSpecs).map(
                        raceShips => raceShips.map(
                            shipSpec => shipSpec.tiles.filter(tile => tile != null)
                        )
                    ).flat(2)
                    .map(x => [x.name, x])).values()
                ]
            );
            console.log(Object.values(shipSpecs).map(
                    raceShips => raceShips.map(
                        shipSpec => shipSpec.tiles.filter(tile => tile != null)
                    )
                ).flat());
        }
    }, [sortMode])

    return (
        <div className={`eclipse-tilelibrary`} >
            <h1>Tile Library</h1>
            <div className="eclipse-tilelibrary-filters">
                <div onClick={() => setSortMode("recents")} className={`eclipse-tilelibrary-filter${sortMode === "recents" ? " eclipse-tilelibrary-filter-selected" : ""}`}><img src={SortIcon} /><span>Used</span></div>
                <div onClick={() => setSortMode("alphabetical")} className={`eclipse-tilelibrary-filter${sortMode === "alphabetical" ? " eclipse-tilelibrary-filter-selected" : ""}`}><img src={SortIcon} /><span>Name</span></div>
                <div onClick={() => setSortMode("category")} className={`eclipse-tilelibrary-filter${sortMode === "category" ? " eclipse-tilelibrary-filter-selected" : ""}`}><img src={SortIcon} /><span>Category</span></div>
            </div>
            <div className="eclipse-tilelibrary-tiles">
                {tileResults.map(tile => <TileLibraryTile tileData={tile} selectLibraryTile={selectLibraryTile} /> )}
                <TileLibraryTile tileData={null} selectLibraryTile={selectLibraryTile} />
            </div>
        </div>
    );
}

export default TileLibrary;