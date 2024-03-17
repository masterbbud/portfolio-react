import './GeoImg.css';
import '../../../App.css';
import { useEffect } from 'react';

function GeoImg({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          GeoImg!
        </div>
    );
}

export default GeoImg;