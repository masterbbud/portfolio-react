import './Resume.css';
import '../../../App.css';
import { Document, Page, pdfjs } from 'react-pdf';

import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import { useEffect } from 'react';
import imgUrl from '../../../resources/resume.pdf';
import pngUrl from '../../../resources/resume.png';


// TODO fix issue where PDF file does not display on CDN

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

function Resume({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-resumebox', 'clickedResume');
    }, [])

    function downloadResume() { 
        const pdfUrl = imgUrl;
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "BrandonFaunce_Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    function hoverCircle(event) {
        console.log(event)
        ///event.target.classList
    }

    // THOUGHT: add horiziontal bar to "See my Resume" text

    return (
        <div className="resumepage-background">
            {/* <div className="resume-circles-wrapper">
                <div className="resume-circles">
                    <div className="resume-circlerow">
                    {[...Array(100)].map(((e, i) => <div key={i} className="resume-circle" onMouseEnter={hoverCircle}></div>))}

                    </div>
                </div>
            </div> */}
            
            <div className="resume-background">
                <div className="embed-container">
                    <img style={{height: "100%"}} src={pngUrl}></img>
                </div>
                
                <div className="resume-things">
                    <div className="resume-headertext">See my Resume.</div>

                    <button className="resume-downloadbutton" onClick={downloadResume}>Download</button>
                </div>
            </div>
            
            
        </div>
        
    );
}

export default Resume;