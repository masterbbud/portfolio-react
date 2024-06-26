import logo from './logo.svg';
import './App.css';
import { Route, createBrowserRouter, RouterProvider, Outlet, createRoutesFromElements } from 'react-router-dom';
import Home from './pages/mainpages/Home/Home.js';
import Contact from './pages/mainpages/Contact/Contact.js';
import Projects from './pages/mainpages/Projects/Projects.js';
import Resume from './pages/mainpages/Resume/Resume.js';
import Playground from './pages/mainpages/Playground/Playground.js';

import GhostJazz from './pages/projects/GhostJazz/GhostJazz.js';
import TrainedTerrain from './pages/projects/TrainedTerrain/TrainedTerrain.js';
import Carve from './pages/projects/Carve/Carve.js';
import Simultactics from './pages/projects/Simultactics/Simultactics.js';
import ProceduralArt from './pages/projects/ProceduralArt/ProceduralArt.js';
import GeoImg from './pages/projects/GeoImg/GeoImg.js';
import Alfa from './pages/projects/Alfa/Alfa.js';
import AsciiImages from './pages/projects/AsciiImages/AsciiImages.js';
import KnotTheory from './pages/projects/KnotTheory/KnotTheory.js';
import GloomhavenCardCreator from './pages/projects/GloomhavenCardCreator/GloomhavenCardCreator.js';
import BezierCreator from './pages/projects/BezierCreator/BezierCreator.js';
import AICompose from './pages/projects/AICompose/AICompose.js';
import Words from './pages/projects/Words/Words.js';
import BankedCurves from './pages/projects/BankedCurves/BankedCurves.js';
import TotalDifferenceLabeling from './pages/projects/TotalDifferenceLabeling/TotalDifferenceLabeling.js';
import HotNCold from './pages/projects/HotNCold/HotNCold.js';
import SugarRush from './pages/projects/SugarRush/SugarRush.js';
import SurpriseMeStore from './pages/projects/SurpriseMeStore/SurpriseMeStore.js';
import Comix from './pages/projects/Comix/Comix.js';
import BunchNotes from './pages/projects/BunchNotes/BunchNotes.js';
import Typhon from './pages/projects/Typhon/Typhon.js';
import InRainbows from './pages/projects/InRainbows/InRainbows.js';
import ScaleSynthesis from './pages/projects/ScaleSynthesis/ScaleSynthesis.js';
import RITCourseVision from './pages/projects/RITCourseVision/RITCourseVision.js';
import Resweet from './pages/projects/Resweet/Resweet.js';
import RasPiDisplay from './pages/projects/RasPiDisplay/RasPiDisplay.js';
import IDEACard from './pages/projects/IDEACard/IDEACard.js';

import TwelveTone from './pages/playground/TwelveTone/TwelveTone.js';
import Fourier from './pages/playground/Fourier/Fourier.js';

import PageNotFound from './pages/other/PageNotFound/PageNotFound.js'
import Header from './components/Header/Header.js'
import InDev from './components/InDev/InDev.js'
import { useEffect, useState, createRef, useRef } from 'react';

function App() {

  const MainRef = createRef();
  const projectsScroll = useRef(0);

  function handleScroll() {
    if (window.location.href.endsWith('projects')) {
      projectsScroll.current = MainRef.current.scrollTop;
    }
  }

  const PageLayout = () => (
    <div className="App">
      { !window.location.pathname.startsWith('/playground') ? <Header/> :null }
      { !window.location.pathname.startsWith('/playground') ? <InDev/>:null }
      <div id="App-main" className="page-main" ref={MainRef} onScroll={handleScroll} >
        <Outlet />
      </div>
    </div>
  );


  const router = createBrowserRouter(
    createRoutesFromElements (
      <Route element={<PageLayout />}>
        <Route path="/" element={<Home arriveAtPage={arriveAtPage} />} />
        <Route path="/resume" element={<Resume arriveAtPage={arriveAtPage} />} />
        <Route path="/projects" element={<Projects arriveAtPage={arriveAtPage} mainRef={MainRef} projectsScroll={projectsScroll} />} />
        <Route path="/contact" element={<Contact arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/ghostjazz" element={<GhostJazz arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/trainedterrain" element={<TrainedTerrain arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/carve" element={<Carve arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/simultactics" element={<Simultactics arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/proceduralart" element={<ProceduralArt arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/geoimg" element={<GeoImg arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/alfa" element={<Alfa arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/asciiimages" element={<AsciiImages arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/knottheory" element={<KnotTheory arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/gloomhavencardcreator" element={<GloomhavenCardCreator arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/beziercreator" element={<BezierCreator arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/aicompose" element={<AICompose arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/words" element={<Words arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/bankedcurves" element={<BankedCurves arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/totaldifferencelabeling" element={<TotalDifferenceLabeling arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/hotncold" element={<HotNCold arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/sugarrush" element={<SugarRush arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/surprisemestore" element={<SurpriseMeStore arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/comix" element={<Comix arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/bunchnotes" element={<BunchNotes arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/typhon" element={<Typhon arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/inrainbows" element={<InRainbows arriveAtPage={arriveAtPage} />} />
        <Route path="/playground" element={<Playground arriveAtPage={arriveAtPage} />} />
        <Route path="/playground/twelvetone" element={<TwelveTone arriveAtPage={arriveAtPage} />} />
        <Route path="/playground/fourier" element={<Fourier arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/ideacard" element={<IDEACard arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/raspidisplay" element={<RasPiDisplay arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/resweet" element={<Resweet arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/ritcoursevision" element={<RITCourseVision arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/scalesynthesis" element={<ScaleSynthesis arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/twelvetone" element={<TwelveTone arriveAtPage={arriveAtPage} />} />
        <Route path="/projects/fourier" element={<Fourier arriveAtPage={arriveAtPage} />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  )

  function arriveAtPage(id, headerClass) {
    if (!document.getElementById(id)) {
      return;
    }
    document.getElementById('App-homebox').classList.remove('clicked');
    document.getElementById('App-resumebox').classList.remove('clicked');
    document.getElementById('App-projectsbox').classList.remove('clicked');
    document.getElementById('App-contactbox').classList.remove('clicked');
    let clicked = document.getElementById(id);
    clicked.classList.add('clicked');
    let elem = document.getElementById('App-coverbar');
    elem.classList.remove(...elem.classList);
    elem.classList.add(headerClass);
    MainRef.current.scrollTo(0,0);
  }
  
  return (
    <RouterProvider router={router} />
  );
}

export default App;
