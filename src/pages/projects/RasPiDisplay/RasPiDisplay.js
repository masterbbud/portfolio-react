import './RasPiDisplay.css';
import '../../../App.css';
import { useEffect } from 'react';

function RasPiDisplay({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          RasPi Display!
        </div>
    );
}

export default RasPiDisplay;