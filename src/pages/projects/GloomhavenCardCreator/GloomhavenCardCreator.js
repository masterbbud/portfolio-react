import './GloomhavenCardCreator.css';
import '../../../App.css';
import { useEffect } from 'react';

function GloomhavenCardCreator({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Gloomhaven Card Creator!
        </div>
    );
}

export default GloomhavenCardCreator;