import './Projects.css';
import '../../../App.css';
import { useEffect, useState } from 'react';
import ProjectCard from '../../../components/ProjectCard/ProjectCard.js';
import ghostJazzUrl from '../../projects/GhostJazz/icon.png';
import trainedTerrainUrl from '../../projects/TrainedTerrain/icon.png';
import carveUrl from '../../projects/Carve/icon.png';
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
import ideaCardUrl from '../../projects/IDEACard/icon.png';
import raspiUrl from '../../projects/RasPiDisplay/icon.png';
import coursevisionUrl from '../../projects/RITCourseVision/icon.png';
import bezierUrl from '../../projects/BezierCreator/icon.png';
import composeUrl from '../../projects/AICompose/icon.png';
import bankedCurvesUrl from '../../projects/BankedCurves/icon.png';
import nullUrl from './null.png';

import proceduralArtUrl from '../../projects/ProceduralArt/icon.png';

function Projects({ arriveAtPage, mainRef, projectsScroll }) {

    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
        mainRef.current.scrollTo(0, projectsScroll.current);
    }, [])

    return (
        <div className="projects-background">
          <ProjectCard title="Ghost Jazz" description="A jazz-inspired game in which a musical ghost plays his heart out to fend off the oncoming waves of skeletons at a jazz club." image={ghostJazzUrl} url="ghostjazz" color="#379674" />
          <ProjectCard title="Trained Terrain" description="An engine to convert 2D topological maps into 3D models, using a Fully Convolutional Neural Network." image={trainedTerrainUrl} url="trainedterrain" color="#22401b"/>
          <ProjectCard title="Carve" description="Promoting the ease and accessibility of web scraping through a no-code, in-browser Chrome Extension." image={carveUrl} url="carve" color="#8c32a5"/>
          <ProjectCard title="Simultactics" description="A turn-based fantasy game which has players taking actions at the same time and embraces chaos through simplicity." image={nullUrl} url="simultactics" color="#0669bf"/>
          <ProjectCard title="Procedural Art" description="A Java Processing P3 application to create procedurally generated random fractals out of smaller shapes." image={proceduralArtUrl} url="proceduralart" color="#8f1b11"/>
          <ProjectCard title="GeoImg" description="A website where users around the world can attach memories to their physical location and view others' posts based on real-world proximity." image={geoImgUrl} url="geoimg" color="#276fa1"/>
          <ProjectCard title="Alfa" description="An esoteric programming language where every token is made of only alphabetic characters." image={alfaUrl} url="alfa" color="#1f1f1f"/>
          <ProjectCard title="Ascii Images" description="A python utility program which takes an image as input and outputs ASCII art for the image." image={asciiUrl} url="asciiimages" color="#0c0c0c"/>
          <ProjectCard title="Knot Theory" description="A Processing GUI which makes drawing, transforming, and analyzing mathematical knots quick and easy." image={knotUrl} url="knottheory" color="#0f0f64"/>
          <ProjectCard title="Gloomhaven Card Creator" description="A standalone application which makes it easy to design and export custom cards and classes for the top-rated board game, Gloomhaven." image={gloomhavenUrl} url="gloomhavencardcreator" color="#9e7e50"/>
          <ProjectCard title="Bezier Creator" description="A simple Java program which lets users trace over images with bezier curves to be exported for use in Processing Java projects." image={bezierUrl} url="beziercreator" color="#d43131"/>
          <ProjectCard title="AI Compose" description="A pseudo-random 2-part composition tool that applies the rules of counterpoint to generate interesting and sonorous melody and accompaniament." image={composeUrl} url="aicompose" color="#525252"/>
          <ProjectCard title="Words" description="An interactive visualization tool for the semantic similarity of words, which groups words based on the distance of their entries in a thesaurus." image={wordsUrl} url="words" color="#1b1200"/>
          <ProjectCard title="Banked Curves" description="A simulation to demonstrate the physics of banked curves, written as a webpage to help future students of AP Physics C at Hopkins School." image={bankedCurvesUrl} url="bankedcurves" color="#294681"/>
          <ProjectCard title="Total Difference Labeling" description="This is SimScrape" image={nullUrl} url="totaldifferencelabeling" color="#22401b"/>
          <ProjectCard title="HotNCold" description="This is SimScrape" image={nullUrl} url="hotncold" color="#22401b"/>
          <ProjectCard title="Sugar Rush" description="This is SimScrape" image={nullUrl} url="sugarrush" color="#22401b"/>
          <ProjectCard title="Surprise MeStore" description="This is Surprise MeStore" image={storeUrl} url="surprisemestore" color="#acada8"/>
          <ProjectCard title="COMIX" description="This is COMIX" image={comixUrl} url="comix" color="#ff7070"/>
          <ProjectCard title="BunchNotes" description="This is BunchNotes" image={bunchnotesUrl} url="bunchnotes" color="#649fcb"/>
          <ProjectCard title="Typhon" description="This is Typhon" image={typhonUrl} url="typhon" color="#08382a"/>
          <ProjectCard title="InRainbows" description="This is In Rainbows" image={rainbowsUrl} url="inrainbows" color="#430806"/>
          <ProjectCard title="IDEA Card" description="This is IDEA Card" image={ideaCardUrl} url="ideacard" color="#32435f"/>
          <ProjectCard title="RasPi Display" description="This is RasPi Display" image={raspiUrl} url="raspidisplay" color="#c15d1b"/>
          <ProjectCard title="Resweet" description="This is Resweet" image={nullUrl} url="resweet" color="#22401b"/>
          <ProjectCard title="RIT CourseVision" description="This is RIT CourseVision" image={coursevisionUrl} url="ritcoursevision" color="#f76902"/>
          <ProjectCard title="Scale Synthesis" description="This is Scale Synthesis" image={nullUrl} url="scalesynthesis" color="#22401b"/>
          <ProjectCard title="TwelveTone" description="This is TwelveTone" image={nullUrl} url="twelvetone" color="#22401b"/>
          <ProjectCard title="Fourier" description="This is Fourier" image={nullUrl} url="fourier" color="#22401b"/>

            {/* <Route path="/projects/ideacard" element={<IDEACard arriveAtPage={arriveAtPage} />} />
            <Route path="/projects/raspidisplay" element={<RasPiDisplay arriveAtPage={arriveAtPage} />} />
            <Route path="/projects/resweet" element={<Resweet arriveAtPage={arriveAtPage} />} />
            <Route path="/projects/ritcoursevision" element={<RITCourseVision arriveAtPage={arriveAtPage} />} />
            <Route path="/projects/scalesynthesis" element={<ScaleSynthesis arriveAtPage={arriveAtPage} />} />
            <Route path="/projects/twelvetone" element={<TwelveTone arriveAtPage={arriveAtPage} />} />
            <Route path="/projects/fourier" element={<Fourier arriveAtPage={arriveAtPage} />} /> */}
        </div>
    );
}

export default Projects;