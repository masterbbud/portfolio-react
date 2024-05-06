import './Resweet.css';
import '../../../App.css';
import { useEffect } from 'react';

function Resweet({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Resweet!
        </div>
    );
}

export default Resweet;