import './RasPiDisplay.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function RasPiDisplay({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          RasPi Display!
        </div>
    );
}

export const info = {
    title: "RasPi Display",
    description: "A live-updating webpage to display a 'smart' clock on a Raspberry PI, including integrations with Spotify, Apple Weather, and Apple Calendar.",
    image: iconUrl,
    url: "raspidisplay",
    color: "#c15d1b",
    date: new Date('08/24/2022') // best guess
}

export default RasPiDisplay;