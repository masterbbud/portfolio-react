import './Carve.css';
import '../../../App.css';
import { useEffect } from 'react';

function Carve({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Carve!
        </div>
    );
}

export default Carve;