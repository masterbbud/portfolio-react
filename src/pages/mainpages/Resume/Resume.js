import './Resume.css';
import '../../../App.css';
import { Document, Page } from 'react-pdf';
import { useEffect } from 'react';
import { pdfjs } from 'react-pdf';
import imgUrl from '../../../resources/resume.pdf';

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

    // THOUGHT: add horiziontal bar to "See my Resume" text

    return (
        <div className="resumepage-background">
            <div className="resume-background">
                <div className="embed-container">
                    <Document file={imgUrl}>
                        <Page pageNumber={1} scale={5} renderTextLayer={false} renderAnnotationLayer={false}/>
                    </Document>
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