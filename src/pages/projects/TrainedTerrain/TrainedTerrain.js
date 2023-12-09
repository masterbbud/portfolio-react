import './TrainedTerrain.css';
import '../../../App.css';
import { useEffect } from 'react';

function TrainedTerrain({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Trained Terrain!
        </div>
    );
}

export default TrainedTerrain;