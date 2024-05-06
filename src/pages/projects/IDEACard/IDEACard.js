import './IDEACard.css';
import '../../../App.css';
import { useEffect } from 'react';

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

export default IDEACard;