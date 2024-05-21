import './BezierCreator.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function BezierCreator({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Bezier Creator!
        </div>
    );
}

export const info = {
    title: "Bezier Creator",
    description: "A simple Java program which lets users trace over images with bezier curves to be exported for use in Processing Java projects.",
    image: iconUrl,
    url: "beziercreator",
    color: "#d43131",
    date: new Date('03/06/2022'), // best guess

}

export default BezierCreator;