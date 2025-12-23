import './EclipseCalculator.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function EclipseCalculator({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Eclipse Calculator!
        </div>
    );
}

export const info = {
    title: "Eclipse Calculator",
    description: "A tool for measuring the outcome probabilities of a single battle in Eclipse (2nd edition).",
    image: iconUrl,
    url: "eclipsecalculator",
    color: "#13134aff",
    date: new Date('12/18/2025'),
    implemented: true
}

export default EclipseCalculator;