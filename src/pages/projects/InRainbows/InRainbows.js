import './InRainbows.css';
import '../../../App.css';
import { useEffect } from 'react';

function InRainbows({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          In Rainbows!
        </div>
    );
}

export default InRainbows;