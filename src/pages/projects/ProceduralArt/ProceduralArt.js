import './ProceduralArt.css';
import '../../../App.css';
import { useEffect } from 'react';

function ProceduralArt({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Procedural Art!
        </div>
    );
}

export default ProceduralArt;