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
import sugarUrl from '../../projects/SugarRush/icon.png';
import hotncoldUrl from '../../projects/HotNCold/icon.png';
import resweetUrl from '../../projects/Resweet/icon.png';
import scalesUrl from '../../projects/ScaleSynthesis/icon.png';
import twelveUrl from '../../projects/TwelveTone/icon.png';
import fourierUrl from '../../projects/Fourier/icon.png';
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
          <ProjectCard title="Total Difference Labeling" description="A User Interface for drawing and connecting graphs and calculating valid or minimal Total Difference Labelings." image={nullUrl} url="totaldifferencelabeling" color="#3f6b09"/>
          <ProjectCard title="HotNCold" description="A powered-up laser tag game about capturing the enemy team's flag and bringing it back to your base undetected." image={hotncoldUrl} url="hotncold" color="#005864"/>
          <ProjectCard title="Sugar Rush" description="A halloween game about a kid on a sugar rush, who steals candy from fellow trick-or-treaters to use as weapons against them." image={sugarUrl} url="sugarrush" color="#26153c"/>
          <ProjectCard title="Surprise MeStore" description="An electronic store for blind boxes, supporting order tracking and inventory management for a marketplace of sellers and buyers." image={storeUrl} url="surprisemestore" color="#acada8"/>
          <ProjectCard title="COMIX" description="A native desktop application for managing your comic book collection, optimized for large collections and operations such as searching and sorting the collection." image={comixUrl} url="comix" color="#ff7070"/>
          <ProjectCard title="BunchNotes" description="A public note-sharing application for your college, making it easy to find up-to-date notes from other students in similar classes." image={bunchnotesUrl} url="bunchnotes" color="#649fcb"/>
          <ProjectCard title="Typhon" description="The award-winning hackathon game which puts a real-time, fantasy spin on the kid's game Rock Paper Scissors." image={typhonUrl} url="typhon" color="#08382a"/>
          <ProjectCard title="InRainbows" description="A musical creative adventure which involves arranging, recording, and mixing all of Radiohead's In Rainbows for several cello parts." image={rainbowsUrl} url="inrainbows" color="#430806"/>
          <ProjectCard title="IDEA Card" description="A full-stack application integrated with Google Cloud products, built to assist in the visibility of disabled job applicants who suffer discrimination in the hiring process." image={ideaCardUrl} url="ideacard" color="#32435f"/>
          <ProjectCard title="RasPi Display" description="A live-updating webpage to display a 'smart' clock on a Raspberry PI, including integrations with Spotify, Apple Weather, and Apple Calendar." image={raspiUrl} url="raspidisplay" color="#c15d1b"/>
          <ProjectCard title="Resweet" description="A mobile app that scans and itemizes your receipt with AI to make bill-splitting easier, whether you're at the supermarket or a restaurant." image={resweetUrl} url="resweet" color="#673AB7"/>
          <ProjectCard title="RIT CourseVision" description="A redesign of RIT's Student Information System which implements desireable features such as course planning, automatedd flowcharts, and improved usability for viewing course info." image={coursevisionUrl} url="ritcoursevision" color="#f76902"/>
          <ProjectCard title="Scale Synthesis" description='A compositional tool for writing and playing music in scales with other than 12 tones per octave, used to compose the minimalist piece "I always end up where I began".' image={scalesUrl} url="scalesynthesis" color="#c3413c"/>
          <ProjectCard title="TwelveTone" description="A visualization for twelve-tone matrices, as described by Arnold Shoenberg, as a side-by-side tool for analyzing pieces composed using twelve-tone technique." image={twelveUrl} url="twelvetone" color="#7c4118"/>
          <ProjectCard title="Fourier" description="An online, web-embedded calculator for the Discrete Fourier Transform, to aid in evaluating the appearance of frequency spectra of various sampled functions." image={fourierUrl} url="fourier" color="#79953c"/>

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