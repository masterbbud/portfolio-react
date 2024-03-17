import './KnotTheory.css';
import '../../../App.css';
import { useEffect } from 'react';

function KnotTheory({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Knot Theory!
        </div>
    );
}

export default KnotTheory;