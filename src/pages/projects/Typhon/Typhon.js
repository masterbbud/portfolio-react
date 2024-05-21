import './Typhon.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function Typhon({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Typhon!
        </div>
    );
}

export const info = {
    title: "Typhon",
    description: "The award-winning hackathon game which puts a real-time, fantasy spin on the kid's game Rock Paper Scissors.",
    image: iconUrl,
    url: "typhon",
    color: "#08382a",
    date: new Date('09/03/2022')
}

export default Typhon;