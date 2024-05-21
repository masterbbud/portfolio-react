import './Words.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function Words({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Words!
          https://github.com/masterbbud/Words
          https://github.com/masterbbud/Words.git
        
        </div>
    );
}

export const info = {
    title: "Words",
    description: "An interactive visualization tool for the semantic similarity of words, which groups words based on the distance of their entries in a thesaurus.",
    image: iconUrl,
    url: "words",
    color: "#1b1200",
    date: new Date('04/03/2022') // best guess
}

export default Words;