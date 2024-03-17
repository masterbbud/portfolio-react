import './TwelveTone.css';
import '../../../App.css';
import { useEffect, useState } from 'react';

function TwelveTone({ arriveAtPage }) {

    const notesArray = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];

    const [gridRows, setGridRows] = useState([]);
    const [centralPitch, setCentralPitch] = useState("E");
    const [indexColorMode, setIndexColorMode] = useState(true);
    const [greyColorMode, setGreyColorMode] = useState(false);

    const [sequence, setSequence] = useState("01392e4t7856");
    
    useEffect(() => {
        arriveAtPage('App-playgroundbox', 'clickedPlayground');
        generateGridRows();
    }, [])

    function generateGridRows() {
        let rows = [];
        let seq = getIntSequence();
        rows.push(seq);
        let comp = (seq[0] * 2) % 12; // first row and first col sub i should sum to this
        for (let i = 1; i < 12; i++) {
            let newseq = [(comp - seq[i] + 12) % 12];
            for (let n = 1; n < 12; n++) {
                newseq.push((seq[n] + newseq[0] - seq[0] + 12) % 12);
            }
            rows.push(newseq);
        }
        setGridRows(rows);
    }

    function getIntSequence() {
        return [...sequence].map(el => isNaN(el) ? convertChar(el) : parseInt(el));
    }

    function convertChar(ch) {
        if (ch == 't') {
            return 10;
        }
        if (ch == 'e') {
            return 11;
        }
    }

    function getStringFor(i) {
        if (i < 10) {
            return i.toString();
        }
        else if (i == 10) {
            return 't';
        }
        else if (i == 11) {
            return 'e';
        }
    }

    function getNoteFor(i) {
        return notesArray[(i + notesArray.indexOf(centralPitch) + 12) % 12];
    }

    function getColorFor(i) {
        let n = i;
        if (!indexColorMode) {
            n = (i + notesArray.indexOf(centralPitch) + 12) % 12;
        }
        if (greyColorMode) {
            // From HSL, lerped from 0deg 100% 50% to 0deg 100% 100%
            return [
                "#ff0000",
                "#ff1414",
                "#ff2e2e",
                "#ff4747",
                "#ff5c5c",
                "#ff7575",
                "#ff8a8a",
                "#ffa3a3",
                "#ffb8b8",
                "#ffd1d1",
                "#ffe5e5",
                "#ffffff"
            ][n]
        }
        else {
            // From the RYB Color Wheel.
            return [
                "#FE2712",
                "#FC600A",
                "#FB9902",
                "#FCCC1A",
                "#FEFE33",
                "#B2D732",
                "#66B032",
                "#347C98",
                "#0247FE",
                "#4424D6",
                "#8601AF",
                "#C21460"
            ][n];
        }
    }

    function isValidSequence() {

    }

    return (
        <div className="twelvetone-background">
            <div className="twelvetone-left">
                
            </div>
            <div className="twelvetone-right">
                <div className="twelvetone-grid">
                    {gridRows.map((row, i) => 
                        <div className="twelvetone-gridrow" key={i}>
                            {row.map((obj, n) =>
                                <div className="twelvetone-gridcell" key={n} style={{backgroundColor: getColorFor(obj)}}>
                                    <div className="twelvetone-cellnote">{getNoteFor(obj)}</div>
                                    <div className="twelvetone-cellnumber">{getStringFor(obj)}</div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default TwelveTone;