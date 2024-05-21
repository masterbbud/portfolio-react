import './Simultactics.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function Simultactics({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Simultactics!
        </div>
    );
}

export const info = {
    title: "Simultactics",
    description: "A turn-based fantasy game which has players taking actions at the same time and embraces chaos through simplicity.",
    image: iconUrl,
    url: "simultactics",
    color: "#0669bf",
    date: new Date('02/24/2020') // best guess
}

export default Simultactics;