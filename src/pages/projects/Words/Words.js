import './Words.css';
import '../../../App.css';
import { useEffect } from 'react';

function Words({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Words!
          https://github.com/masterbbud/Words
          https://github.com/masterbbud/Words.git
        
        </div>
    );
}

export default Words;