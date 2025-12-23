import './EclipseCalculator.css';
import '../../../App.css';
import '../Playground.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import MInterceptor from './assets/ships/minterceptor.png';
import MCruiser from './assets/ships/mcruiser.png';
import MDreadnought from './assets/ships/mdreadnought.png';
import MStarbase from './assets/ships/mstarbase.png';
import HInterceptor from './assets/ships/hinterceptor.png';
import HCruiser from './assets/ships/hcruiser.png';
import HDreadnought from './assets/ships/hdreadnought.png';
import HStarbase from './assets/ships/hstarbase.png';
import DInterceptor from './assets/ships/dinterceptor.png';
import DCruiser from './assets/ships/dcruiser.png';
import DDreadnought from './assets/ships/ddreadnought.png';
import DStarbase from './assets/ships/dstarbase.png';
import PInterceptor from './assets/ships/pinterceptor.png';
import PCruiser from './assets/ships/pcruiser.png';
import PDreadnought from './assets/ships/pdreadnought.png';
import PStarbase from './assets/ships/pstarbase.png';
import EInterceptor from './assets/ships/einterceptor.png';
import ECruiser from './assets/ships/ecruiser.png';
import EDreadnought from './assets/ships/edreadnought.png';
import EStarbase from './assets/ships/estarbase.png';
import AInterceptor from './assets/ships/ainterceptor.png';
import ACruiser from './assets/ships/acruiser.png';
import ADreadnought from './assets/ships/adreadnought.png';
import AStarbase from './assets/ships/astarbase.png';
import Ancient from './assets/ships/ancient.png';
import Guardian from './assets/ships/guardian.png';
import GCDS from './assets/ships/gcds.png';

function ShipImage({ race, shipType }) {

    const shipToImage = {
        "Mechanema": {
            interceptor: MInterceptor,
            cruiser: MCruiser,
            dreadnought: MDreadnought,
            starbase: MStarbase
        },
        "Orion Hegemony": {
            interceptor: HInterceptor,
            cruiser: HCruiser,
            dreadnought: HDreadnought,
            starbase: HStarbase
        },
        "Descendants of Draco": {
            interceptor: DInterceptor,
            cruiser: DCruiser,
            dreadnought: DDreadnought,
            starbase: DStarbase
        },
        "Hydran Progress": {
            interceptor: PInterceptor,
            cruiser: PCruiser,
            dreadnought: PDreadnought,
            starbase: PStarbase
        },
        "Eridani Empire": {
            interceptor: EInterceptor,
            cruiser: ECruiser,
            dreadnought: EDreadnought,
            starbase: EStarbase
        },
        "Planta": {
            interceptor: AInterceptor,
            cruiser: ACruiser,
            dreadnought: ADreadnought,
            starbase: AStarbase
        },
        "NPC": {
            ancient: Ancient,
            guardian: Guardian,
            gcds: GCDS
        }
    }

    return (
        <img src={shipToImage[race][shipType]} className={`eclipse-battle-display-ship eclipse-battle-display-ship-${shipType}`} />
    );
}

export default ShipImage;