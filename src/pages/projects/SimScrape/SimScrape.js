import './SimScrape.css';
import '../../../App.css';
import { useEffect } from 'react';

function SimScrape({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          SimScrape!
        </div>
    );
}

export default SimScrape;