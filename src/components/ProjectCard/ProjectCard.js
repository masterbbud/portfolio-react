import './ProjectCard.css';
import '../../App.css';
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function ProjectCard({ title, description, image, url, color, implemented }) {

    const navigate = useNavigate();

    function clickProject() {
        if (implemented) {
            navigate(`/projects/${url}`);
        }
    }
    return (
        <div className={"project-card" + (implemented ? "" : " project-notimplemented")} onClick={clickProject} style={{backgroundColor: color}}>
            <div className="projectcard-left">
                <div className="projectcard-title">{title}</div>
                <div className="projectcard-text">{description}</div>
            </div>
            <div>
                <img src={image} className="projectcard-image"/>
            </div>
        </div>
    );
}

export default ProjectCard;
