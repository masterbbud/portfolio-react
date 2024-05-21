import './ProceduralArt.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function ProceduralArt({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Procedural Art!
        </div>
    );
}

export const info = {
    title: "Procedural Art",
    description: "A Java Processing P3 application to create procedurally generated random fractals out of smaller shapes.",
    image: iconUrl,
    url: "proceduralart",
    color: "#8f1b11",
    date: new Date('11/15/2023')
}

export default ProceduralArt;