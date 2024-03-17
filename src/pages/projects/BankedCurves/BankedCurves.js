import './BankedCurves.css';
import '../../../App.css';
import { useEffect } from 'react';

function BankedCurves({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Banked Curves!
        </div>
    );
}

export default BankedCurves;