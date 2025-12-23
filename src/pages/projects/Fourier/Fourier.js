import './Fourier.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function Fourier({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Fourier!
        </div>
    );
}

export const info = {
    title: "Fourier",
    description: "An online, web-embedded calculator for the Discrete Fourier Transform, to aid in evaluating the appearance of frequency spectra of various sampled functions.",
    image: iconUrl,
    url: "fourier",
    color: "#79953c",
    date: new Date('04/06/2024'),
    implemented: true
}

export default Fourier;