import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import EditMenu from './EditMenu';
import BattleMenu from './BattleMenu';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MLogo from './assets/logos/mlogo.png';
import HLogo from './assets/logos/hlogo.png';
import DLogo from './assets/logos/dlogo.png';
import PLogo from './assets/logos/plogo.png';
import ELogo from './assets/logos/elogo.png';
import ALogo from './assets/logos/alogo.png';
import NPCLogo from './assets/logos/npclogo.png';

import AbsorptionShield from './assets/tiles/absorptionshield.png';
import AntimatterCannon from './assets/tiles/antimattercannon.png';
import AntimatterMissile from './assets/tiles/antimattermissile.png';
import AxionComputer from './assets/tiles/axioncomputer.png';
import ConformalDrive from './assets/tiles/conformaldrive.png';
import ConifoldField from './assets/tiles/conifoldfield.png';
import ElectronComputer from './assets/tiles/electroncomputer.png';
import FluxMissile from './assets/tiles/fluxmissile.png';
import FluxShield from './assets/tiles/fluxshield.png';
import FusionDrive from './assets/tiles/fusiondrive.png';
import FusionSource from './assets/tiles/fusionsource.png';
import GaussShield from './assets/tiles/gaussshield.png';
import GluonComputer from './assets/tiles/gluoncomputer.png';
import Hull from './assets/tiles/hull.png';
import HypergridSource from './assets/tiles/hypergridsource.png';
import ImprovedHull from './assets/tiles/improvedhull.png';
import InversionShield from './assets/tiles/inversionshield.png';
import IonCannon from './assets/tiles/ioncannon.png';
import IonDisruptor from './assets/tiles/iondisruptor.png';
import IonMissile from './assets/tiles/ionmissile.png';
import IonTurret from './assets/tiles/ionturret.png';
import MuonSource from './assets/tiles/muonsource.png';
import NonlinearDrive from './assets/tiles/nonlineardrive.png';
import NuclearDrive from './assets/tiles/nucleardrive.png';
import NuclearSource from './assets/tiles/nuclearsource.png';
import PhaseShield from './assets/tiles/phaseshield.png';
import PlasmaCannon from './assets/tiles/plasmacannon.png';
import PlasmaMissile from './assets/tiles/plasmamissile.png';
import PlasmaTurret from './assets/tiles/plasmaturret.png';
import PositronComputer from './assets/tiles/positroncomputer.png';
import SentientHull from './assets/tiles/sentienthull.png';
import ShardHull from './assets/tiles/shardhull.png';
import SolitonCannon from './assets/tiles/solitoncannon.png';
import SolitonCharger from './assets/tiles/solitoncharger.png';
import SolitonMissile from './assets/tiles/solitonmissile.png';
import TachyonDrive from './assets/tiles/tachyondrive.png';
import TachyonSource from './assets/tiles/tachyonsource.png';
import TransitionDrive from './assets/tiles/transitiondrive.png';
import ZeroPointSource from './assets/tiles/zeropointsource.png';

function EclipseCalculator() {

    const races = [
        {name: 'Mechanema', image: MLogo},
        {name: 'Orion Hegemony', image: HLogo},
        {name: 'Descendants of Draco', image: DLogo},
        {name: 'Hydran Progress', image: PLogo},
        {name: 'Eridani Empire', image: ELogo},
        {name: 'Planta', image: ALogo},
        {name: 'NPC', image: NPCLogo},
    ];

    const raceToColor = {
        'Mechanema': '239, 245, 245',
        'Orion Hegemony': '34, 29, 33',
        'Descendants of Draco': '212, 205, 55',
        'Hydran Progress': '46, 88, 152',
        'Eridani Empire': '187, 41, 33',
        'Planta': '68, 136, 10',
        'NPC': '125, 125, 125',
    }

    const baseStats = {energy: 0, hull: 0, weapons: [], missiles: [], drive: 0, computers: 0, shields: 0, cost: 0, initiative: 0};
    const baseTile = {...baseStats, isExtra: false};
    
    const tiles = [
        {...baseTile, name: 'Absorption Shield', image: AbsorptionShield, shields: 1, energy: 4},
        {...baseTile, name: 'Antimatter Cannon', image: AntimatterCannon, weapons: [4], cost: 4},
        {...baseTile, name: 'Antimatter Missile', image: AntimatterMissile, missiles: [4]},
        {...baseTile, name: 'Axion Computer', image: AxionComputer, computers: 2},
        {...baseTile, name: 'Conformal Drive', image: ConformalDrive, drive: 4, initiative: 2, cost: 2},
        {...baseTile, name: 'Conifold Field', image: ConifoldField, hull: 3, cost: 2},
        {...baseTile, name: 'Electron Computer', image: ElectronComputer, computers: 1},
        {...baseTile, name: 'Flux Missile', image: FluxMissile, missiles: [1, 1], initiative: 1},
        {...baseTile, name: 'Flux Shield', image: FluxShield, shields: 3, initiative: 1, cost: 2},
        {...baseTile, name: 'Fusion Drive', image: FusionDrive, drive: 2, initiative: 2, cost: 2},
        {...baseTile, name: 'Fusion Source', image: FusionSource, energy: 6},
        {...baseTile, name: 'Gauss Shield', image: GaussShield, shields: 1},
        {...baseTile, name: 'Gluon Computer', image: GluonComputer, computers: 3, cost: 2},
        {...baseTile, name: 'Hull', image: Hull, hull: 1},
        {...baseTile, name: 'Hypergrid Source', image: HypergridSource, energy: 11},
        {...baseTile, name: 'Improved Hull', image: ImprovedHull, hull: 2},
        {...baseTile, name: 'Inversion Shield', image: InversionShield, shields: 2, energy: 2},
        {...baseTile, name: 'Ion Cannon', image: IonCannon, weapons: [1], cost: 1},
        {...baseTile, name: 'Ion Disruptor', image: IonDisruptor, weapons: [1], initiative: 3},
        {...baseTile, name: 'Ion Missile', image: IonMissile, missiles: [1, 1, 1]},
        {...baseTile, name: 'Ion Turret', image: IonTurret, weapons: [1, 1]},
        {...baseTile, name: 'MuonSource', image: MuonSource, energy: 2, initiative: 1, isExtra: true},
        {...baseTile, name: 'Nonlinear Drive', image: NonlinearDrive, drive: 2, energy: 2},
        {...baseTile, name: 'Nuclear Drive', image: NuclearDrive, drive: 1, initiative: 1, cost: 1},
        {...baseTile, name: 'Nuclear Source', image: NuclearSource, energy: 3},
        {...baseTile, name: 'Phase Shield', image: PhaseShield, shields: 2, cost: 1},
        {...baseTile, name: 'Plasma Cannon', image: PlasmaCannon, weapons: [2], cost: 2},
        {...baseTile, name: 'Plasma Missile', image: PlasmaMissile, missiles: [2, 2], cost: 1},
        {...baseTile, name: 'Plasma Turret', image: PlasmaTurret, weapons: [2, 2], cost: 3},
        {...baseTile, name: 'Positron Computer', image: PositronComputer, computers: 2, cost: 1},
        {...baseTile, name: 'Sentient Hull', image: SentientHull, computers: 1, hull: 1},
        {...baseTile, name: 'Shard Hull', image: ShardHull, hull: 3},
        {...baseTile, name: 'Soliton Cannon', image: SolitonCannon, weapons: [3], cost: 3},
        {...baseTile, name: 'Soliton Charger', image: SolitonCharger, weapons: [3], cost: 1},
        {...baseTile, name: 'Soliton Missile', image: SolitonMissile, missiles: [3], initiative: 1},
        {...baseTile, name: 'Tachyon Drive', image: TachyonDrive, drive: 3, initiative: 3, cost: 3},
        {...baseTile, name: 'Tachyon Source', image: TachyonSource, energy: 9},
        {...baseTile, name: 'Transition Drive', image: TransitionDrive, drive: 3},
        {...baseTile, name: 'Zero-Point Source', image: ZeroPointSource, energy: 12},
    ];

    function findTile(name) {
        return tiles.find(t => t.name === name);
    }

    const npcShipOptions = {
        "ancient": {
            "base": {type: "ancient", class: "base", tiles: [], stats: {...baseStats, weapons: [1, 1], computers: 1, hull: 1, initiative: 2}},
            "advanced": {type: "ancient", class: "advanced", tiles: [], stats: {...baseStats, weapons: [2], computers: 1, hull: 2, initiative: 1}},
        },
        "guardian": {
            "base": {type: "guardian", class: "base", tiles: [], stats: {...baseStats, weapons: [1, 1, 1], computers: 2, hull: 2, initiative: 3}},
            "advanced": {type: "guardian", class: "advanced", tiles: [], stats: {...baseStats, weapons: [4], missiles: [2, 2], computers: 1, hull: 3, initiative: 1}},
        },
        "gcds": {
            "base": {type: "gcds", class: "base", tiles: [], stats: {...baseStats, weapons: [1, 1, 1, 1], computers: 2, hull: 7}},
            "advanced": {type: "gcds", class: "advanced", tiles: [], stats: {...baseStats, weapons: [4], missiles: [1, 1, 1, 1], computers: 2, hull: 3, initiative: 2}},
        }
    }
    const baseShipsPerRace = {
        "Mechanema": [
            {type: "interceptor", class: "Gamma", tiles: [findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Nuclear Drive"), null], stats: {...baseStats, initiative: 2}},
            {type: "cruiser", class: "Beta", tiles: [findTile("Electron Computer"), findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Hull"), null, findTile("Nuclear Drive")], stats: {...baseStats, initiative: 1}},
            {type: "dreadnought", class: "Alpha", tiles: [findTile("Electron Computer"), findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Hull"), findTile("Ion Cannon"), findTile("Hull"), null, findTile("Nuclear Drive")], stats: {...baseStats}},
            {type: "starbase", class: "Delta", tiles: [findTile("Electron Computer"), findTile("Hull"), null, findTile("Ion Cannon"), findTile("Hull")], stats: {...baseStats, initiative: 4, energy: 3}},
        ],
        "Orion Hegemony": [
            {type: "interceptor", class: "Contact", tiles: [findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Nuclear Drive"), findTile("Gauss Shield")], stats: {...baseStats, initiative: 3, energy: 1}},
            {type: "cruiser", class: "Control", tiles: [findTile("Electron Computer"), findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Hull"), findTile("Gauss Shield"), findTile("Nuclear Drive")], stats: {...baseStats, initiative: 2, energy: 2}},
            {type: "dreadnought", class: "Dominate", tiles: [findTile("Electron Computer"), findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Hull"), findTile("Ion Cannon"), findTile("Hull"), findTile("Gauss Shield"), findTile("Nuclear Drive")], stats: {...baseStats, initiative: 1, energy: 3}},
            {type: "starbase", class: "Protect", tiles: [findTile("Electron Computer"), findTile("Hull"), findTile("Ion Cannon"), findTile("Gauss Shield"), findTile("Hull")], stats: {...baseStats, initiative: 5, energy: 3}},
        ],
        "Descendants of Draco": [
            {type: "interceptor", class: "Wight", tiles: [findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Nuclear Drive"), null], stats: {...baseStats, initiative: 2}},
            {type: "cruiser", class: "Banshee", tiles: [findTile("Electron Computer"), findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Hull"), null, findTile("Nuclear Drive")], stats: {...baseStats, initiative: 1}},
            {type: "dreadnought", class: "Wraith", tiles: [findTile("Electron Computer"), findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Hull"), findTile("Ion Cannon"), findTile("Hull"), null, findTile("Nuclear Drive")], stats: {...baseStats}},
            {type: "starbase", class: "Revenant", tiles: [findTile("Electron Computer"), findTile("Hull"), null, findTile("Ion Cannon"), findTile("Hull")], stats: {...baseStats, initiative: 4, energy: 3}},
        ],
        "Hydran Progress": [
            {type: "interceptor", class: "Advance", tiles: [findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Nuclear Drive"), null], stats: {...baseStats, initiative: 2}},
            {type: "cruiser", class: "Discovery", tiles: [findTile("Electron Computer"), findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Hull"), null, findTile("Nuclear Drive")], stats: {...baseStats, initiative: 1}},
            {type: "dreadnought", class: "Achievement", tiles: [findTile("Electron Computer"), findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Hull"), findTile("Ion Cannon"), findTile("Hull"), null, findTile("Nuclear Drive")], stats: {...baseStats}},
            {type: "starbase", class: "Knowledge", tiles: [findTile("Electron Computer"), findTile("Hull"), null, findTile("Ion Cannon"), findTile("Hull")], stats: {...baseStats, initiative: 4, energy: 3}},
        ],
        "Eridani Empire": [
            {type: "interceptor", class: "Gladius", tiles: [findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Nuclear Drive"), null], stats: {...baseStats, initiative: 2, energy: 1}},
            {type: "cruiser", class: "Pilum", tiles: [findTile("Electron Computer"), findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Hull"), null, findTile("Nuclear Drive")], stats: {...baseStats, initiative: 1, energy: 1}},
            {type: "dreadnought", class: "Ballista", tiles: [findTile("Electron Computer"), findTile("Nuclear Source"), findTile("Ion Cannon"), findTile("Hull"), findTile("Ion Cannon"), findTile("Hull"), null, findTile("Nuclear Drive")], stats: {...baseStats, energy: 1}},
            {type: "starbase", class: "Scutum", tiles: [findTile("Electron Computer"), findTile("Hull"), null, findTile("Ion Cannon"), findTile("Hull")], stats: {...baseStats, initiative: 4, energy: 3}},
        ],
        "Planta": [
            {type: "interceptor", class: "Seed", tiles: [findTile("Nuclear Source"), findTile("Ion Cannon"), null, findTile("Nuclear Drive")], stats: {...baseStats, energy: 2, computers: 1}},
            {type: "cruiser", class: "Leaf", tiles: [findTile("Nuclear Source"), null, findTile("Ion Cannon"), findTile("Hull"), null, findTile("Nuclear Drive")], stats: {...baseStats, energy: 2, computers: 1}},
            {type: "dreadnought", class: "Branch", tiles: [findTile("Nuclear Source"), null, findTile("Ion Cannon"), findTile("Hull"), findTile("Ion Cannon"), findTile("Hull"), null, findTile("Nuclear Drive")], stats: {...baseStats, energy: 2, computers: 1}},
            {type: "starbase", class: "Root", tiles: [findTile("Electron Computer"), null, findTile("Ion Cannon"), findTile("Hull"), findTile("Hull")], stats: {...baseStats, initiative: 2, energy: 5, computers: 1}},
        ],
        "NPC": [
            npcShipOptions.ancient.base,
            npcShipOptions.guardian.base,
            npcShipOptions.gcds.base,
        ]
    }
    
    const [displayMode, setDisplayMode] = useState("edit");

    const [shipSpecs, setShipSpecs] = useState(
        Object.fromEntries(
            races.map(race => [race.name, structuredClone(baseShipsPerRace[race.name])])
        )
    );

    const initialRaceBattleQuantities = Object.fromEntries(
        races.map(race => race.name === "NPC" ? [race.name, {ancient: 0, guardian: 0, gcds: 0}] : [race.name, {interceptor: 0, cruiser: 0, dreadnought: 0, starbase: 0}])
    );
    const [raceBattleQuantities, setRaceBattleQuantities] = useState(structuredClone(initialRaceBattleQuantities));


    const [raceOrder, setRaceOrder] = useState([]);

    return (
        <div className="eclipse-background">
            <div className="eclipse-main">
                <div className="eclipse-title">Eclipse Battle Calculator</div>
                <div className="eclipse-mode-select">
                    <div className={`eclipse-mode-edit${displayMode === "edit" ? " eclipse-mode-selected" : ""}`} onClick={() => setDisplayMode("edit")}>
                        Edit
                    </div>
                    <div className={`eclipse-mode-battle${displayMode === "battle" ? " eclipse-mode-selected" : ""}`} onClick={() => setDisplayMode("battle")}>
                        Battle
                    </div>
                </div>
                {displayMode === "edit" ? 
                    <EditMenu races={races} shipSpecs={shipSpecs} setShipSpecs={setShipSpecs} tiles={tiles} baseShipsPerRace={baseShipsPerRace} npcShipOptions={npcShipOptions} />
                :
                    <BattleMenu races={races} shipSpecs={shipSpecs} raceToColor={raceToColor} raceBattleQuantities={raceBattleQuantities} setRaceBattleQuantities={setRaceBattleQuantities} initialRaceBattleQuantities={initialRaceBattleQuantities} raceOrder={raceOrder} setRaceOrder={setRaceOrder} />
                }
            </div>
        </div>
    );
}

export default EclipseCalculator;