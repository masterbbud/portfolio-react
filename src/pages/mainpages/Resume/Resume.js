import './Resume.css';
import '../../../App.css';
import { useEffect } from 'react';

function Resume({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-resumebox', 'clickedResume');
    }, [])

    return (
        <div>
          Resume Page
        </div>
    );
}

export default Resume;