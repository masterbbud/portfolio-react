import './ScaleSynthesis.css';
import '../../../App.css';
import { useEffect } from 'react';

function ScaleSynthesis({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Scale Synthesis!
        </div>
    );
}

export default ScaleSynthesis;