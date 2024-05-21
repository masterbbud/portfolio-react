import './SurpriseMeStore.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function SurpriseMeStore({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Surprise MeStore!
          https://github.com/masterbbud/SWEN261-SS-Sommerfeld
        </div>
    );
}

export const info = {
    title: "Surprise MeStore",
    description: "An electronic store for blind boxes, supporting order tracking and inventory management for a marketplace of sellers and buyers.",
    image: iconUrl,
    url: "surprisemestore",
    color: "#acada8",
    date: new Date('02/01/2023')
}

export default SurpriseMeStore;