import './GhostJazz.css';
import '../../../App.css';
import { useEffect } from 'react';

function GhostJazz({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Ghost Jazz!
        </div>
    );
}

export default GhostJazz;