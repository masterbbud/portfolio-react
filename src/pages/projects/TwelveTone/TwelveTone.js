import './TwelveTone.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function TwelveTone({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          TwelveTone!
        </div>
    );
}

export const info = {
    title: "TwelveTone",
    description: "A visualization for twelve-tone matrices, as described by Arnold Shoenberg, as a side-by-side tool for analyzing pieces composed using twelve-tone technique.",
    image: iconUrl,
    url: "twelvetone",
    color: "#7c4118",
    date: new Date('03/17/2024'),
    implemented: true
}

export default TwelveTone;