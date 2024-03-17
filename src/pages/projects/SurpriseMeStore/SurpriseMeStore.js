import './SurpriseMeStore.css';
import '../../../App.css';
import { useEffect } from 'react';

function SurpriseMeStore({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Surprise MeStore!
          https://github.com/masterbbud/SWEN261-SS-Sommerfeld
        </div>
    );
}

export default SurpriseMeStore;