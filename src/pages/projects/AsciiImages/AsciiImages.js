import './AsciiImages.css';
import '../../../App.css';
import { useEffect } from 'react';

function AsciiImages({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Ascii Images!
        </div>
    );
}

export default AsciiImages;