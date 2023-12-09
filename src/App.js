import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './pages/mainpages/Home/Home.js';
import Contact from './pages/mainpages/Contact/Contact.js';
import Projects from './pages/mainpages/Projects/Projects.js';
import Resume from './pages/mainpages/Resume/Resume.js';

import GhostJazz from './pages/projects/GhostJazz/GhostJazz.js';
import TrainedTerrain from './pages/projects/TrainedTerrain/TrainedTerrain.js';

import PageNotFound from './pages/other/PageNotFound/PageNotFound.js'
import Header from './components/Header/Header.js'
import InDev from './components/InDev/InDev.js'

function App() {
  function arriveAtPage(id, headerClass) {
    document.getElementById('App-homebox').classList.remove('clicked');
    document.getElementById('App-resumebox').classList.remove('clicked');
    document.getElementById('App-projectsbox').classList.remove('clicked');
    document.getElementById('App-contactbox').classList.remove('clicked');
    let clicked = document.getElementById(id);
    clicked.classList.add('clicked');
    let elem = document.getElementById('App-coverbar');
    elem.classList.remove(...elem.classList);
    elem.classList.add(headerClass);
  }
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <InDev/>
        <div className="page-main">
          <Routes>
            <Route path="/" element={<Home arriveAtPage={arriveAtPage} />} />
            <Route path="/resume" element={<Resume arriveAtPage={arriveAtPage} />} />
            <Route path="/projects" element={<Projects arriveAtPage={arriveAtPage} />} />
            <Route path="/contact" element={<Contact arriveAtPage={arriveAtPage} />} />
            <Route path="/projects/ghostjazz" element={<GhostJazz arriveAtPage={arriveAtPage} />} />
            <Route path="/projects/trainedterrain" element={<TrainedTerrain arriveAtPage={arriveAtPage} />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
        
      </div>
    </BrowserRouter>
    
  );
}

export default App;
