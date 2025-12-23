import './Projects.css';
import '../../../App.css';
import { useEffect, useState, useRef } from 'react';
import ProjectCard from '../../../components/ProjectCard/ProjectCard.js';

import { info as GhostJazzInfo } from '../../projects/GhostJazz/GhostJazz.js';
import { info as TrainedTerrainInfo } from '../../projects/TrainedTerrain/TrainedTerrain.js';
import { info as CarveInfo } from '../../projects/Carve/Carve.js';
import { info as SimultacticsInfo } from '../../projects/Simultactics/Simultactics.js';
import { info as ProceduralArtInfo } from '../../projects/ProceduralArt/ProceduralArt.js';
import { info as GeoImgInfo } from '../../projects/GeoImg/GeoImg.js';
import { info as TyphonInfo } from '../../projects/Typhon/Typhon.js';
import { info as BunchNotesInfo } from '../../projects/BunchNotes/BunchNotes.js';
import { info as AlfaInfo } from '../../projects/Alfa/Alfa.js';
import { info as AsciiImagesInfo } from '../../projects/AsciiImages/AsciiImages.js';
import { info as KnotTheoryInfo } from '../../projects/KnotTheory/KnotTheory.js';
import { info as GloomhavenCardCreatorInfo } from '../../projects/GloomhavenCardCreator/GloomhavenCardCreator.js';
import { info as WordsInfo } from '../../projects/Words/Words.js';
import { info as InRainbowsInfo } from '../../projects/InRainbows/InRainbows.js';
import { info as ComixInfo } from '../../projects/Comix/Comix.js';
import { info as SurpriseMeStoreInfo } from '../../projects/SurpriseMeStore/SurpriseMeStore.js';
import { info as IDEACardInfo } from '../../projects/IDEACard/IDEACard.js';
import { info as RasPiDisplayInfo } from '../../projects/RasPiDisplay/RasPiDisplay.js';
import { info as RITCourseVisionInfo } from '../../projects/RITCourseVision/RITCourseVision.js';
import { info as BezierCreatorInfo } from '../../projects/BezierCreator/BezierCreator.js';
import { info as AIComposeInfo } from '../../projects/AICompose/AICompose.js';
import { info as BankedCurvesInfo } from '../../projects/BankedCurves/BankedCurves.js';
import { info as TotalDifferenceLabelingInfo } from '../../projects/TotalDifferenceLabeling/TotalDifferenceLabeling.js';
import { info as SugarRushInfo } from '../../projects/SugarRush/SugarRush.js';
import { info as HotNColdInfo } from '../../projects/HotNCold/HotNCold.js';
import { info as ResweetInfo } from '../../projects/Resweet/Resweet.js';
import { info as ScaleSynthesisInfo } from '../../projects/ScaleSynthesis/ScaleSynthesis.js';
import { info as TwelveToneInfo } from '../../projects/TwelveTone/TwelveTone.js';
import { info as FourierInfo } from '../../projects/Fourier/Fourier.js';
import { info as EclipseCalculatorInfo } from '../../projects/EclipseCalculator/EclipseCalculator.js';

import proceduralArtUrl from '../../projects/ProceduralArt/icon.png';

export const allInfo = [
    GhostJazzInfo,
    TrainedTerrainInfo,
    CarveInfo,
    SimultacticsInfo,
    ProceduralArtInfo,
    GeoImgInfo,
    TyphonInfo,
    BunchNotesInfo,
    AlfaInfo,
    AsciiImagesInfo,
    KnotTheoryInfo,
    GloomhavenCardCreatorInfo,
    WordsInfo,
    InRainbowsInfo,
    ComixInfo,
    SurpriseMeStoreInfo,
    IDEACardInfo,
    RasPiDisplayInfo,
    RITCourseVisionInfo,
    BezierCreatorInfo,
    AIComposeInfo,
    BankedCurvesInfo,
    TotalDifferenceLabelingInfo,
    SugarRushInfo,
    HotNColdInfo,
    ResweetInfo,
    ScaleSynthesisInfo,
    TwelveToneInfo,
    FourierInfo,
    EclipseCalculatorInfo,
];

function Projects({ arriveAtPage, mainRef, projectsScroll }) {

    const timeouts = useRef({});
    const [sortType, setSortType] = useState((x, y) => alphabeticalSort);

    function hoverSort(event) {
        let ref = setTimeout(() => {
            document.getElementById(event.target.id).querySelector('.projects-sorttooltip').classList.add('show');
        }, 200);
        timeouts[event.target.id] = ref
    }

    function unHoverSort(event) {
        clearTimeout(timeouts[event.target.id]);
        document.getElementById(event.target.id).querySelector('.projects-sorttooltip').classList.remove('show');
    }

    function clickSort(event) {
        switch (event.target.id.split('-').at(-1)) {
            case "alphabetical":
                setSortType((x, y) => alphabeticalSort);
                return;

            case "startdate":
                console.log('testaaa')
                setSortType((x, y) => dateSort);
                return;
        };
    }
    
    function alphabeticalSort(x, y) {
        return x.title.localeCompare(y.title);
    }

    function dateSort(x, y) {
        return x.date == y.date ? 0 : (x.date > y.date ? -1 : 1);
    }

    // relevance (size + date)
    // invert sort
    // size
    // team size

    useEffect(() => {
        arriveAtPage('App-projectsbox', 'clickedProjects');
        document.body.style.backgroundColor = '#541c5d';
        mainRef.current.scrollTo(0, projectsScroll.current);
    }, [])

    return (
        <div className="projects-background">
            {allInfo.toSorted((x, y) => sortType(x, y)).map((el, i) => 
                <ProjectCard key={i} title={el.title} description={el.description} image={el.image} url={el.url} color={el.color} implemented={el.implemented ? true : false} />
            )}
            {/* <div className="projects-sortoverlay">
                <div className="projects-sortbutton" id="projects-sortbutton-alphabetical" onMouseEnter={hoverSort} onMouseLeave={unHoverSort} onClick={clickSort}>
                    <div className="projects-sorticon">Test</div>
                    <div className="projects-sorttooltip">Sort by Name</div>
                </div>
                <div className="projects-sortbutton" id="projects-sortbutton-startdate" onMouseEnter={hoverSort} onMouseLeave={unHoverSort} onClick={clickSort}>
                    <div className="projects-sorticon">Test</div>
                    <div className="projects-sorttooltip">Sort by Start Date</div>
                </div>
                <div className="projects-sortbutton" id="projects-sortbutton-size" onMouseEnter={hoverSort} onMouseLeave={unHoverSort} onClick={clickSort}>
                    <div className="projects-sorticon">Test</div>
                    <div className="projects-sorttooltip">Sort by Project Size</div>
                </div>
            </div> */}
        </div>
    );
}

export default Projects;