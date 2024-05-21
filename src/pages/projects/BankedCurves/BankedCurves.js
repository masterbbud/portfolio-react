import './BankedCurves.css';
import '../../../App.css';
import { useEffect } from 'react';
import iconUrl from './icon.png';

function BankedCurves({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div>
          Banked Curves!
        </div>
    );
}

export const info = {
    title: "Banked Curves",
    description: "A simulation to demonstrate the physics of banked curves, written as a webpage to help future students of AP Physics C at Hopkins School.",
    image: iconUrl,
    url: "bankedcurves",
    color: "#294681",
    date: new Date('03/16/2022')
}

export default BankedCurves;