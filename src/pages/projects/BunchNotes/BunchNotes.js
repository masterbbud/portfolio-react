import './BunchNotes.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function BunchNotes({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          BunchNotes!
        </div>
    );
}

export const info = {
    title: "BunchNotes",
    description: "A public note-sharing application for your college, making it easy to find up-to-date notes from other students in similar classes.",
    image: iconUrl,
    url: "bunchnotes",
    color: "#649fcb",
    date: new Date('02/25/2023')
}

export default BunchNotes;