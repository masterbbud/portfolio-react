import './AsciiImages.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function AsciiImages({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Ascii Images!
        </div>
    );
}

export const info = {
    title: "Ascii Images",
    description: "A python utility program which takes an image as input and outputs ASCII art for the image.",
    image: iconUrl,
    url: "asciiimages",
    color: "#0c0c0c",
    date: new Date('08/30/2022')
}

export default AsciiImages;