import './Resweet.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function Resweet({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Resweet!
        </div>
    );
}

export const info = {
    title: "Resweet",
    description: "A mobile app that scans and itemizes your receipt with AI to make bill-splitting easier, whether you're at the supermarket or a restaurant.",
    image: iconUrl,
    url: "resweet",
    color: "#673AB7",
    date: new Date('02/24/2024')
}

export default Resweet;