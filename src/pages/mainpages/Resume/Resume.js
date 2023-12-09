import './Resume.css';
import '../../../App.css';
import { useEffect } from 'react';

function Resume({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-resumebox', 'clickedResume');
    }, [])

    return (
        <div className="indev">
          This page is in development.
        </div>
    );
}

export default Resume;