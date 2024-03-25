import './TwelveTone.css';
import '../../../App.css';
import '../Playground.css';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TwelveTone({ arriveAtPage }) {

    const navigate = useNavigate();

    const notesArray = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    const possibleValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 't', 'e'];

    const [gridRows, setGridRows] = useState([]);
    const [centralPitch, setCentralPitch] = useState("E");
    const [indexColorMode, setIndexColorMode] = useState(true);
    const [greyColorMode, setGreyColorMode] = useState(false);

    const [sequence, setSequence] = useState("01392e4t7856");
    const [sequenceInput, setSequenceInput] = useState("01392e4t7856");
    const [searchValue, setSearchValue] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [thirdDivision, setThirdDivison] = useState(false);

    const [selectedRow, setSelectedRow] = useState(null);
    
    useEffect(() => {
        arriveAtPage('App-playgroundbox', 'clickedPlayground');
        generateGridRows();
    }, [sequence])

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

    function generateRandomSequence() {
        let shuffled = possibleValues
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .join('');
        setSequenceInput(shuffled);
        setSequence(shuffled);
        return shuffled;
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

    function getIndexFromNote(n) {
        if (notesArray.indexOf(n) == -1) {
            return null;
        }
        return (notesArray.indexOf(centralPitch) - notesArray.indexOf(n) + 12) % 12;
    }

    function getColorFor(y, x, i) {
        if (selectedRow != null) {
            let [type, index] = selectedRow.split(' ');
            if (type == 'I' || type == 'RI') {
                if (x != index) {
                    return '#FFFFFF';
                }
            }
            else {
                if (y != index) {
                    return '#FFFFFF';
                }
            }
        }
        else if (searchValue != "") {
            if (!searchResults.some(tuple => tuple[0] == x && tuple[1] == y)) {
                return '#FFFFFF';
            }
        }
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

    function setSearch(value) {
        setSearchValue(value);

        if (gridRows.length < 12) {
            return;
        }

        if (value == "") {
            setSearchResults([]);
            return;
        }

        let searchNums = value.split(' ').filter(m => m != "").map(n => getIndexFromNote(n));
        if (searchNums.some(el => el == null)) {
            return;
        }
        
        let results = [];
        for (let i = 0; i < 12; i++) {
            for (let j = 0; j < 12; j++) {
                if (gridRows[i][j] == searchNums[0]) {
                    let dirs = [true, true, true, true]
                    for (let c = 1; c < searchNums.length; c++) {
                        if (gridRows.length <= i + c || gridRows[i + c][j] != searchNums[c]) {
                            dirs[0] = false;
                        }
                        if (i - c < 0 || gridRows[i - c][j] != searchNums[c]) {
                            dirs[1] = false;
                        }
                        if (gridRows[0].length <= j + c || gridRows[i][j + c] != searchNums[c]) {
                            dirs[2] = false;
                        }
                        if (j - c < 0 || gridRows[i][j - c] != searchNums[c]) {
                            dirs[3] = false;
                        }
                    }
                    for (let c = 1; c < searchNums.length; c++) {
                        if (dirs[0]) {
                            results.push([i + c, j]);
                        }
                        if (dirs[1]) {
                            results.push([i - c, j]);
                        }
                        if (dirs[2]) {
                            results.push([i, j + c]);
                        }
                        if (dirs[3]) {
                            results.push([i, j - c]);
                        }
                    }
                    if (dirs[0] || dirs[1] || dirs[2] || dirs[3]) {
                        results.push([i, j]);
                    }
                }
            }
        }
        setSearchResults(results);
    }

    function isValidSequence() {
        return sequence.length == 12 && ![...sequence].some(e => !possibleValues.includes(e));
    }

    function renderSequence() {

        setSequence(sequenceInput);
    }

    return (
        <div className="twelvetone-background">
            <div className="twelvetone-header">
                Twelve-Tone Grid Generator
            </div>
            <div className="twelvetone-content">
                <div className="twelvetone-left">
                    <div className="twelvetone-fields">
                        <div className="twelvetone-field twelvetone-sequence" style={{marginBottom: '1em'}}>
                            <div>Sequence: </div>
                            <div className="twelvetone-paireditems">
                                <input value={sequenceInput} onInput={e => setSequenceInput(e.target.value)} placeholder="0123456789te"/>
                                <button className="playground-secondarybutton" onClick={generateRandomSequence}>Randomize</button>
                            </div>
                        </div>
                        <div className="twelvetone-field">
                            <div>Central Pitch (0): </div>
                            <select type="dropdown" value={centralPitch} onInput={e => setCentralPitch(e.target.value)} placeholder="0123456789te">
                                {notesArray.map(item => 
                                    <option name={item} key={item}> {item}</option>)}
                            </select>
                        </div>
                        <div className="twelvetone-field">
                            <div>Color by Degree: </div>
                            <input type="checkbox" defaultChecked={indexColorMode} onInput={e => setIndexColorMode(e.target.checked)}/>
                        </div>
                        <div className="twelvetone-field">
                            <div>Monochrome: </div>
                            <input type="checkbox" defaultChecked={greyColorMode} onInput={e => setGreyColorMode(e.target.checked)}/>
                        </div>
                        <div className="twelvetone-field">
                            <div>Divide Grid: </div>
                            <input type="checkbox" defaultChecked={thirdDivision} onInput={e => setThirdDivison(e.target.checked)}/>
                        </div>
                        <div style={{marginTop: '1em', display: 'flex'}}>
                            <button className="playground-primarybutton twelvetone-renderbutton" onClick={renderSequence}>Render</button>
                        </div>
                        {
                            (new Set(sequence)).size !== sequence.length ? 
                            <div className="twelvetone-inlinealert">
                                <div className="inline-icon warning-icon">!</div>
                                <div className="twelvetone-renderwarning">
                                    <b>Warning:</b> Your sequence uses duplicate note names. A proper 12-tone sequence uses each degree exactly once.
                                </div>
                            </div>
                            : null
                        }
                        {
                            sequence.length != 12 ?
                            <div className="twelvetone-inlinealert">
                                <div className="inline-icon error-icon">X</div>
                                <div className="twelvetone-rendererror">
                                    <b>Error:</b> A twelve-tone sequence must have exactly 12 notes.
                                </div>
                            </div>
                            : null
                        }
                        {
                            [...sequence].some(e => !possibleValues.includes(e)) ?
                            <div className="twelvetone-inlinealert">
                                <div className="inline-icon error-icon">X</div>
                                <div className="twelvetone-rendererror">
                                    <b>Error:</b> Only use notes of the digits 0-9, t, or e.
                                </div>
                            </div>
                            : null
                        }
                    </div>
                </div>
                <div className="twelvetone-right">
                    <div className="twelvetone-gridwrapper">
                        <div className="twelvetone-gridhbox">
                            {gridRows.map((v, i) => 
                                <div className="twelvetone-gridrowdecorator" key={i}
                                style={
                                    {fontWeight: selectedRow == `I ${i}` ? 'bold' : 'normal'}}
                                onClick={() => setSelectedRow(selectedRow != `I ${i}` ? `I ${i}` : null)}>
                                    <div className="twelvetone-decoratorcontent">
                                        ↓I<sub>{gridRows[0][i]}</sub> 
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="twelvetone-middlewrapperrow">
                            <div className="twelvetone-gridvbox">
                                {gridRows.map((v, i) => 
                                    <div className="twelvetone-gridrowdecorator" key={i}
                                    style={
                                        {fontWeight: selectedRow == `P ${i}` ? 'bold' : 'normal'}}
                                    onClick={() => setSelectedRow(selectedRow != `P ${i}` ? `P ${i}` : null)}>
                                        <div className="twelvetone-decoratorcontent">
                                            <div className="twelvetone-gridcontentvertical">
                                                <div>→</div>
                                                <div>P<sub>{gridRows[i][0]}</sub></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={`${thirdDivision ? "twelvetone-dividedgrid " : ""}twelvetone-grid`}>
                                { isValidSequence() ?
                                gridRows.map((row, i) => 
                                    <div className="twelvetone-gridrow" key={i}>
                                        {row.map((obj, n) =>
                                            <div className="twelvetone-gridcell" key={n} style={{backgroundColor: getColorFor(i, n, obj)}}>
                                                <div className="twelvetone-cellnote">{getNoteFor(obj)}</div>
                                                <div className="twelvetone-cellnumber">{getStringFor(obj)}</div>
                                            </div>
                                        )}
                                    </div>
                                )
                                : null}
                            </div>
                            <div className="twelvetone-gridvbox">
                                {gridRows.map((v, i) => 
                                    <div className="twelvetone-gridrowdecorator" key={i}
                                    style={
                                        {fontWeight: selectedRow == `R ${i}` ? 'bold' : 'normal'}}
                                    onClick={() => setSelectedRow(selectedRow != `R ${i}` ? `R ${i}` : null)}>
                                        <div className="twelvetone-decoratorcontent">
                                            <div className="twelvetone-gridcontentvertical">
                                                <div>←</div>
                                                <div>R<sub>{gridRows[i][0]}</sub></div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        <div className="twelvetone-gridhbox">
                            {gridRows.map((v, i) => 
                                <div className="twelvetone-gridrowdecorator" key={i}
                                style={
                                    {fontWeight: selectedRow == `RI ${i}` ? 'bold' : 'normal'}}
                                onClick={() => setSelectedRow(selectedRow != `RI ${i}` ? `RI ${i}` : null)}>
                                    <div className="twelvetone-decoratorcontent">
                                        ↑RI<sub>{gridRows[0][i]}</sub>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="twelvetone-searchbar">
                    <div className="twelvetone-searchwrapper">
                        <div className="twelvetone-searchheader">
                            Search for a sequence
                        </div>
                        <div className="twelvetone-search">
                            <input value={searchValue} onInput={e => setSearch(e.target.value)} placeholder="A B D# F"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="playground-clickmore">
                <u onClick={() => window.location.href = "/projects/twelvetone"}>Interested in the application? Click to read more.</u>
            </div>
        </div>
    );
}

// https://en.wikipedia.org/wiki/Twelve-tone_technique
// https://musictheory.pugetsound.edu/mt21c/section-195.html

export default TwelveTone;