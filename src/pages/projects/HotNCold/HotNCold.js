import './HotNCold.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function HotNCold({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Hot n Cold!
        </div>
    );
}

export const info = {
    title: "HotNCold",
    description: "A powered-up laser tag game about capturing the enemy team's flag and bringing it back to your base undetected.",
    image: iconUrl,
    url: "hotncold",
    color: "#005864",
    date: new Date('08/27/2020') // best guess
}

export default HotNCold;