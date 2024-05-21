import './TrainedTerrain.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

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

export const info = {
    title: "Trained Terrain",
    description: "An engine to convert 2D topological maps into 3D models, using a Fully Convolutional Neural Network.",
    image: iconUrl,
    url: "trainedterrain",
    color: "#22401b",
    date: new Date('04/28/2023')
}

export default TrainedTerrain;