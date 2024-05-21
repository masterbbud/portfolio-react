import './KnotTheory.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function KnotTheory({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Knot Theory!
        </div>
    );
}

export const info = {
    title: "Knot Theory",
    description: "A Processing GUI which makes drawing, transforming, and analyzing mathematical knots quick and easy.",
    image: iconUrl,
    url: "knottheory",
    color: "#0f0f64",
    date: new Date('02/15/2022') // best guess
}

export default KnotTheory;