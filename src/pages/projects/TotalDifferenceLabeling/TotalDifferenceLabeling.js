import './TotalDifferenceLabeling.css';
import '../../../App.css';
import { useEffect } from 'react';

function TotalDifferenceLabeling({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Total Difference Labeling!
        </div>
    );
}

export default TotalDifferenceLabeling;