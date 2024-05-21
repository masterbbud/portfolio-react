import './Alfa.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function Alfa({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Alfa!
        </div>
    );
}

export const info = {
    title: "Alfa",
    description: "An esoteric programming language where every token is made of only alphabetic characters.",
    image: iconUrl,
    url: "alfa",
    color: "#1f1f1f",
    date: new Date('04/18/2023')
}

export default Alfa;