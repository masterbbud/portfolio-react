import './ProjectCard.css';
import '../../App.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ProjectCard({ title, description, image, url }) {

    const navigate = useNavigate();

    function clickProject() {
        navigate(`/projects/${url}`);
    }
    return (
        <div onClick={clickProject}>
            {title}
        </div>
    );
}

export default ProjectCard;
