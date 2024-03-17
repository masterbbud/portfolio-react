import './Simultactics.css';
import '../../../App.css';
import { useEffect } from 'react';

function Simultactics({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Simultactics!
        </div>
    );
}

export default Simultactics;