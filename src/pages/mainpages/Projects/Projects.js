import './Projects.css';
import '../../../App.css';
import { useEffect } from 'react';
import ProjectCard from '../../../components/ProjectCard/ProjectCard.js';
import ghostJazzUrl from '../../projects/GhostJazz/icon.png';
import trainedTerrainUrl from '../../projects/TrainedTerrain/icon.png';
import simScrapeUrl from '../../projects/SimScrape/icon.png';
import geoImgUrl from '../../projects/GeoImg/icon.png';
import typhonUrl from '../../projects/Typhon/icon.png';
import bunchnotesUrl from '../../projects/BunchNotes/icon.png';
import alfaUrl from '../../projects/Alfa/icon.png';
import asciiUrl from '../../projects/AsciiImages/icon.png';
import knotUrl from '../../projects/KnotTheory/icon.png';
import gloomhavenUrl from '../../projects/GloomhavenCardCreator/icon.png';
import wordsUrl from '../../projects/Words/icon.png';
import rainbowsUrl from '../../projects/InRainbows/icon.png';
import comixUrl from '../../projects/Comix/icon.png';
import storeUrl from '../../projects/SurpriseMeStore/icon.png';

import proceduralArtUrl from '../../projects/ProceduralArt/icon.png';

function Projects({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
    }, [])

    return (
        <div className="projects-background">
          <ProjectCard title="Ghost Jazz" description="A jazz-inspired game in which a musical ghost plays his heart out to fend off the oncoming waves of skeletons at a jazz club." image={ghostJazzUrl} url="ghostjazz" color="#379674" />
          <ProjectCard title="Trained Terrain" description="This is Trained Terrain" image={trainedTerrainUrl} url="trainedterrain" color="#22401b"/>
          <ProjectCard title="SimScrape" description="This is SimScrape" image={simScrapeUrl} url="simscrape" color="#22401b"/>
          <ProjectCard title="Simultactics" description="This is SimScrape" image={simScrapeUrl} url="simultactics" color="#22401b"/>
          <ProjectCard title="Procedural Art" description="A Java Processing P3 application to create procedurally generated random fractals out of smaller shapes." image={proceduralArtUrl} url="proceduralart" color="#8f1b11"/>
          <ProjectCard title="GeoImg" description="A website where users around the world can attach memories to their physical location and view others' posts based on real-world proximity." image={geoImgUrl} url="geoimg" color="#276fa1"/>
          <ProjectCard title="Alfa" description="This is Alfa" image={alfaUrl} url="alfa" color="#1f1f1f"/>
          <ProjectCard title="Ascii Images" description="This is Ascii Images" image={asciiUrl} url="asciiimages" color="#0c0c0c"/>
          <ProjectCard title="Knot Theory" description="This is Knot Theory" image={knotUrl} url="knottheory" color="#0f0f64"/>
          <ProjectCard title="Gloomhaven Card Creator" description="This is Gloomhaven Card Creator" image={gloomhavenUrl} url="gloomhavencardcreator" color="#9e7e50"/>
          <ProjectCard title="Bezier Creator" description="This is SimScrape" image={simScrapeUrl} url="beziercreator" color="#22401b"/>
          <ProjectCard title="AI Compose" description="This is SimScrape" image={simScrapeUrl} url="aicompose" color="#22401b"/>
          <ProjectCard title="Words" description="This is Words" image={wordsUrl} url="words" color="#1b1200"/>
          <ProjectCard title="Banked Curves" description="This is SimScrape" image={simScrapeUrl} url="bankedcurves" color="#22401b"/>
          <ProjectCard title="Total Difference Labeling" description="This is SimScrape" image={simScrapeUrl} url="totaldifferencelabeling" color="#22401b"/>
          <ProjectCard title="HotNCold" description="This is SimScrape" image={simScrapeUrl} url="hotncold" color="#22401b"/>
          <ProjectCard title="Sugar Rush" description="This is SimScrape" image={simScrapeUrl} url="sugarrush" color="#22401b"/>
          <ProjectCard title="Surprise MeStore" description="This is Surprise MeStore" image={storeUrl} url="surprisemestore" color="#acada8"/>
          <ProjectCard title="COMIX" description="This is COMIX" image={comixUrl} url="comix" color="#ff7070"/>
          <ProjectCard title="BunchNotes" description="This is BunchNotes" image={bunchnotesUrl} url="bunchnotes" color="#649fcb"/>
          <ProjectCard title="Typhon" description="This is Typhon" image={typhonUrl} url="typhon" color="#08382a"/>
          <ProjectCard title="InRainbows" description="This is In Rainbows" image={rainbowsUrl} url="inrainbows" color="#430806"/>
        </div>
    );
}

export default Projects;