import './TotalDifferenceLabeling.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function TotalDifferenceLabeling({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Total Difference Labeling!
        </div>
    );
}

export const info = {
    title: "Total Difference Labeling",
    description: "A User Interface for drawing and connecting graphs and calculating valid or minimal Total Difference Labelings.",
    image: iconUrl,
    url: "totaldifferencelabeling",
    color: "#3f6b09",
    date: new Date('03/26/2021') // best guess
}

export default TotalDifferenceLabeling;