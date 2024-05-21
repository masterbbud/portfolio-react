import './Comix.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function Comix({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Comix!
        </div>
    );
}

export const info = {
    title: "COMIX",
    description: "A native desktop application for managing your comic book collection, optimized for large collections and operations such as searching and sorting the collection.",
    image: iconUrl,
    url: "comix",
    color: "#ff7070",
    date: new Date('11/02/2023')
}

export default Comix;