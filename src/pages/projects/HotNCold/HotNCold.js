import './HotNCold.css';
import '../../../App.css';
import { useEffect } from 'react';

function HotNCold({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Hot n Cold!
        </div>
    );
}

export default HotNCold;