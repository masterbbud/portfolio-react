import './GeoImg.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function GeoImg({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          GeoImg!
        </div>
    );
}

export const info = {
    title: "GeoImg",
    description: "A website where users around the world can attach memories to their physical location and view others' posts based on real-world proximity.",
    image: iconUrl,
    url: "geoimg",
    color: "#276fa1",
    date: new Date('04/30/2023')
}

export default GeoImg;