import './ScaleSynthesis.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function ScaleSynthesis({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Scale Synthesis!
        </div>
    );
}

export const info = {
    title: "Scale Synthesis",
    description: 'A compositional tool for writing and playing music in scales with other than 12 tones per octave, used to compose the minimalist piece "I always end up where I began".',
    image: iconUrl,
    url: "scalesynthesis",
    color: "#c3413c",
    date: new Date('04/02/2024')
}

export default ScaleSynthesis;