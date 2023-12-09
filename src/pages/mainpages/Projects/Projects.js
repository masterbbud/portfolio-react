import './Projects.css';
import '../../../App.css';
import { useEffect } from 'react';

function Projects({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div className="indev">
          This page is in development.
        </div>
    );
}

export default Projects;