import './AICompose.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function AICompose({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          AI Compose!
        </div>
    );
}

export const info = {
    title: "AI Compose",
    description: "A pseudo-random 2-part composition tool that applies the rules of counterpoint to generate interesting and sonorous melody and accompaniament.",
    image: iconUrl,
    url: "aicompose",
    color: "#525252",
    date: new Date('03/01/2022'), // best guess
}

export default AICompose;