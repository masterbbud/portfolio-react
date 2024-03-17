import './BezierCreator.css';
import '../../../App.css';
import { useEffect } from 'react';

function BezierCreator({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Bezier Creator!
        </div>
    );
}

export default BezierCreator;