import './InRainbows.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function InRainbows({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          In Rainbows!
        </div>
    );
}

export const info = {
    title: "InRainbows",
    description: "A musical creative adventure which involves arranging, recording, and mixing all of Radiohead's In Rainbows for several cello parts.",
    image: iconUrl,
    url: "inrainbows",
    color: "#430806",
    date: new Date('01/20/2023') // best guess
}

export default InRainbows;