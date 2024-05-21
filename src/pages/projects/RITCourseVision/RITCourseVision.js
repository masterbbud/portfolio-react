import './RITCourseVision.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

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

export const info = {
    title: "RIT CourseVision",
    description: "A redesign of RIT's Student Information System which implements desireable features such as course planning, automatedd flowcharts, and improved usability for viewing course info.",
    image: iconUrl,
    url: "ritcoursevision",
    color: "#f76902",
    date: new Date('01/23/2024')
}

export default RITCourseVision;