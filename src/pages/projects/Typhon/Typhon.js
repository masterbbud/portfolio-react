import './Typhon.css';
import '../../../App.css';
import { useEffect } from 'react';

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

export default Typhon;