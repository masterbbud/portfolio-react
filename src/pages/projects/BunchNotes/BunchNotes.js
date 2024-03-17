import './BunchNotes.css';
import '../../../App.css';
import { useEffect } from 'react';

function BunchNotes({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          BunchNotes!
        </div>
    );
}

export default BunchNotes;