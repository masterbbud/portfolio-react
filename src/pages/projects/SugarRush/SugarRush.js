import './SugarRush.css';
import '../../../App.css';
import { useEffect } from 'react';

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

export default SugarRush;