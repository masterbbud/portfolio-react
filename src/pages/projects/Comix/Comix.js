import './Comix.css';
import '../../../App.css';
import { useEffect } from 'react';

function Comix({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Comix!
        </div>
    );
}

export default Comix;