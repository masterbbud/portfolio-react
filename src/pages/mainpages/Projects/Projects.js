import './Projects.css';
import '../../../App.css';
import { useEffect } from 'react';
import ProjectCard from '../../../components/ProjectCard/ProjectCard.js';

function Projects({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          <ProjectCard title="Ghost Jazz" description="This is Ghost Jazz" image="" url="ghostjazz" />
          <ProjectCard title="Trained Terrain" description="This is Trained Terrain" image="" url="trainedterrain" />
        </div>
    );
}

export default Projects;