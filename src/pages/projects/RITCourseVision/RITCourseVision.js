import './RITCourseVision.css';
import '../../../App.css';
import { useEffect } from 'react';

function RITCourseVision({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          RIT CourseVision!
        </div>
    );
}

export default RITCourseVision;