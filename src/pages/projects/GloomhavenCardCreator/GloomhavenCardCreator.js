import './GloomhavenCardCreator.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function GloomhavenCardCreator({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Gloomhaven Card Creator!
        </div>
    );
}

export const info = {
    title: "Gloomhaven Card Creator",
    description: "A standalone application which makes it easy to design and export custom cards and classes for the top-rated board game, Gloomhaven.",
    image: iconUrl,
    url: "gloomhavencardcreator",
    color: "#9e7e50",
    date: new Date('09/01/2019') // best guess
}

export default GloomhavenCardCreator;