import './AICompose.css';
import '../../../App.css';
import { useEffect } from 'react';

function AICompose({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          AI Compose!
        </div>
    );
}

export default AICompose;