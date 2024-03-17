import './Alfa.css';
import '../../../App.css';
import { useEffect } from 'react';

function Alfa({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Alfa!
        </div>
    );
}

export default Alfa;