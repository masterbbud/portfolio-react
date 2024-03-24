import './GhostJazz.css';
import '../../../App.css';
import { useEffect } from 'react';
import Stats from '../../../components/Stats/Stats.js';
import ghostJazzTitle from './ghostjazztitle.png';

function GhostJazz({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div className="project-wrapper">
            <div className="project-overlay"></div>
            <div className="ghostjazz-background project-background">
                
                <div className="project-header">Ghost Jazz</div>
                <div className="project-subheader">A jazz-inspired game in which a musical ghost plays his heart out to fend off the oncoming waves of skeletons at a jazz club.</div>
                <div className="project-mainflow">
                    <div className="project-text">
                        A creation of the iconic <a href="https://itch.io/jam/rit-game-developers-club-halloween-2023-game-jam">RGDC Halloween Game Jam</a> squad consisting of <a href="mailto:tec8354@rit.edu">Tyler Combs</a>, <a href="mailto:dod4030@rit.edu">Danil Donchuk</a>, <a href="mailto:brf6174@rit.edu">Brandon Faunce</a>, and <a href="mailto:djg5455@rit.edu">Danny Gramowski</a>.
                    </div>
                    <div className="project-text">
                        Project Inception: Fall 2023
                    </div>
                    <div className="project-image">
                        <img src={ghostJazzTitle}></img>
                        <div>Title Screen of Ghost Jazz</div>
                    </div>
                    <div className="project-text">
                        When I heard the theme for the 2023 game jam: SPONTANEOUS, Jazz was the first thing that jumped to mind.
                    </div>
                </div>
            
            </div>
        </div>
        
    );
}

export default GhostJazz;