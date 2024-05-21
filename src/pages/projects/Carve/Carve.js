import './Carve.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function Carve({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Carve!
        </div>
    );
}

export const info = {
    title: "Carve",
    description: "Promoting the ease and accessibility of web scraping through a no-code, in-browser Chrome Extension.",
    image: iconUrl,
    url: "carve",
    color: "#8c32a5",
    date: new Date('04/15/2023'), // best guess

}

export default Carve;