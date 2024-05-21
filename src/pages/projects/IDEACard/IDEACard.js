import './IDEACard.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function IDEACard({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          IDEA Card!
        </div>
    );
}

export const info = {
    title: "IDEA Card",
    description: "A full-stack application integrated with Google Cloud products, built to assist in the visibility of disabled job applicants who suffer discrimination in the hiring process.",
    image: iconUrl,
    url: "ideacard",
    color: "#32435f",
    date: new Date('01/22/2024')
}

export default IDEACard;