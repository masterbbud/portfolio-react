import './SugarRush.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function SugarRush({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Sugar Rush!
          https://github.com/rolandsaav/Halloween-Game-Jam
        </div>
    );
}

export const info = {
    title: "Sugar Rush",
    description: "A halloween game about a kid on a sugar rush, who steals candy from fellow trick-or-treaters to use as weapons against them.",
    image: iconUrl,
    url: "sugarrush",
    color: "#26153c",
    date: new Date('10/29/2022')
}

export default SugarRush;