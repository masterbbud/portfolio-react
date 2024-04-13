import './Fourier.css';
import '../../../App.css';
import '../Playground.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as d3 from "d3";
import FourierGraph from './FourierGraph';

function Fourier() {

    const [data1, setData1] = useState([]);
    const [data2, setData2] = useState([]);
    const [data3, setData3] = useState([]);
    const [data4, setData4] = useState([]);

    const [arrayInput, setArrayInput] = useState([""]);
    const [editingContent, setEditingContent] = useState("")

    const [freqDomain, setFreqDomain] = useState(false);
    const [array, setArray] = useState([]);

    const [useNegativeValues, setUseNegativeValues] = useState(true);
    const [stringFunction, setStringFunction] = useState("");
    const [samples, setSamples] = useState(1);
    const [domain, setDomain] = useState(10);
    const [currentFunction, setCurrentFunction] = useState("Math.cos(x) + i*Math.sin(x)");

    const [functionDef, setFunctionDef] = useState(() => (x) => sampleFunction(x));

    const [xScale, setXScale] = useState(-1);
    const [yScale, setYScale] = useState(-1);

    /*
        func should take x value and return a tuple of real part and imaginary part values.
    */
    function calculateGraphs(func, maxX, delta) {
        console.log(func(1));
        let reSamples = []
        let imSamples = []
        let magSamples = []
        let phaseSamples = []
        for (let x = useNegativeValues ? -maxX : 0; x <= maxX; x+=delta) {
            let result = func(x);
            reSamples.push({x: x, y: result[0]});
            imSamples.push({x: x, y: result[1]});
            magSamples.push({x: x, y: Math.sqrt(result[0]*result[0] + result[1]*result[1])})
            phaseSamples.push({x: x, y: Math.atan2(result[1], result[0])})
        }
        setData1(reSamples);
        setData2(imSamples);
        setData3(magSamples);
        setData4(phaseSamples);
    }

    function sampleFunction(x) {
        return [Math.cos(x/6), 0];
    }

    function arrayFunction(x) {
        if (x < 0 || x >= array.length) {
            return [0,0];
        }
        return [array[x], 0];
    }

    function phase(func) {
        return (x) => Math.atan2(func(x)[0], func(x)[1]);
    }

    function magnitude(func) {
        return (x) => Math.sqrt(Math.pow(func(x)[0], 2) + Math.pow(func(x)[1]));
    }

    function fourierTransform(func, N, delta) {
        return (x) => {
            let sum = 0
            for (let i = 0; i < N; i++) {
                sum += func(i)[0]*Math.cos(2*Math.PI*(i)*x/N);
            }
            //[...Array(N).keys()].forEach(n => console.log(n, func(n)[0]*Math.cos(2*Math.PI*(n)*x/N)))
            return [
                [...Array(N).keys()].reduce((a, n) => a + func(n)[0]*Math.cos(2*Math.PI*(n)*x/N) + func(n)[1]*Math.sin(2*Math.PI*(n)*x/N)),
                [...Array(N).keys()].reduce((a, n) => a - func(n)[0]*Math.sin(2*Math.PI*(n)*x/N) + func(n)[1]*Math.cos(2*Math.PI*(n)*x/N))
            ]
        }
    }

    function editField(index, text) {
        let newList = [...arrayInput];
        if (index == arrayInput.length - 1) {
            newList.push("");
        }

        newList[index] = text;
        setArrayInput(newList);
        console.log(arrayInput);
    }

    function clearList() {
        setArrayInput([""]);
        console.log(arrayInput)
        document.getElementById("fourier-arrayinput").childNodes[1].childNodes[1].childNodes[1].innerHTML = "";
    }

    function renderList() {
        let floatArray = [...arrayInput.slice(0, arrayInput.length - 1).map(el => floatify(el))];
        setArray(floatArray);
        setUseNegativeValues(false);
        setCurrentFunction(`[${floatArray}]`);
        setDomain(floatArray.length-1);
        setSamples(1);
        setFunctionDef(() => (x) => arrayFunction(x));
        //freqDomain ? calculateGraphs(fourierTransform(useArrayFunction, 3000, 1), array.length-1 , 1) : calculateGraphs(useArrayFunction, array.length-1 , 1)
    }

    function renderFunction() {
        let split = splitOnAny(stringFunction, ['i\*', 'i \*']);
        let funcDef = "";
        if (split.length == 1) {
            funcDef = `return [${stringFunction}, 0]`;
        }
        else {
            let tr = split[0].trim();
            let inverse = tr.charAt(tr.length-1) == '-';
            if (tr.charAt(tr.length-1) == '-' || tr.charAt(tr.length-1) == '+') {
                tr = tr.substr(0, tr.length-1);
            }
            funcDef = `return [${tr} 0, ${inverse ? -1 : 1}*(${split[1]})]`;
        }

        const func = new Function('x', funcDef);
        setCurrentFunction(stringFunction);
        setFunctionDef(() => (x) => func(x));
    }

    function splitOnAny(string, substrs) {
        for (let substr of substrs) {
            if (string.includes(substr)) {
                return string.split(substr);
            }
        }
        return [string];
    }

    function floatify(str) {
        let split = str.split('/');
        if (str.includes('/')) {
            return parseFloat(split[0])/parseFloat(split[1])
        }
        return parseFloat(str)
    }

    useEffect(() => {
        freqDomain ? calculateGraphs(fourierTransform(functionDef, domain * samples + 1, 1), domain, 1 / samples) : calculateGraphs(functionDef, domain, 1 / samples)
    }, [functionDef, freqDomain, array])

    return (
        <div className="fourier-background">
            <div className="fourier-main">
                <div className="fourier-settings">
                    
                    
                    <div className="fourier-arrayinput" id="fourier-arrayinput">
                        <div className="fourier-generaloptions">
                            <button onClick={() => setFreqDomain(!freqDomain)} className="fourier-togglefrequency">Toggle Frequency Domain</button>
                            <div className="playground-labeledinput">
                                <span>X Scale:</span>
                                <input type="number" onBlur={evt => evt.currentTarget.value == "" ? setXScale(-1) : setXScale(evt.currentTarget.value)}></input>
                            </div>
                            <div className="playground-labeledinput">
                                <span>Y Scale:</span>
                                <input type="number" onBlur={evt => evt.currentTarget.value == "" ? setYScale(-1) : setYScale(evt.currentTarget.value)}></input>
                            </div>
                        </div>
                        <div className="fourier-arrayoptions">
                            <div className="fourier-arrayrow fourier-firstrow">
                                <div className="fourier-arrayn">n</div>
                                <div className="fourier-arrayvalue">value</div>
                            </div>
                            {
                                arrayInput.map((item, i) => {
                                    let k = i;
                                    return <div key={i} className="fourier-arrayrow">
                                        <div className="fourier-arrayn">{i}</div>
                                        <div className="fourier-arrayvalue" 
                                        onInput={evt => editField(i, evt.currentTarget.innerHTML)}
                                        dangerouslySetInnerHTML={{__html: editingContent}}
                                        contentEditable></div>
                                    </div>
                                    }
                                )
                            }
                            <button onClick={clearList}>Clear Array</button>
                            <button onClick={renderList}>Render Array</button>
                        </div>
                        <div className="fourier-functionoptions">
                            <input className="fourier-functioninput" onChange={evt => setStringFunction(evt.currentTarget.value)} value={stringFunction} placeholder="Math.sin(Math.PI*x)/(Math.PI*x)"></input>
                            <div className="playground-labeledinput">
                                <span>Sample Rate:</span>
                                <input type="number" onChange={evt => setSamples(evt.currentTarget.value)} value={samples}></input>
                            </div>
                            <div className="playground-labeledinput">
                                <span>Domain:</span>
                                <input type="number" onChange={evt => setDomain(evt.currentTarget.value)} value={domain}></input>
                            </div>
                        </div>
                        
                        <button onClick={renderFunction}>Render Function</button>
                    </div>
                </div>
                <div className="fourier-graphs">
                    <div className="fourier-functionheader">
                        <i>{freqDomain ? 'F(ξ)' : 'f(x)'}</i>{freqDomain ? ' = ℱ{' : ' = '}{currentFunction}{freqDomain ? '}' : ''}
                    </div>
                    <div className="fourier-realimaginary">
                        <FourierGraph data={data1} xcoord={freqDomain ? 'ξ' : 'x'} ycoord={freqDomain ? 'Re{F(ξ)}' : 'Re{f(x)}'} xscale={xScale} yscale={yScale}></FourierGraph>
                        <FourierGraph data={data2} xcoord={freqDomain ? 'ξ' : 'x'} ycoord={freqDomain ? 'Im{F(ξ)}' : 'Im{f(x)}'} xscale={xScale} yscale={yScale}></FourierGraph>
                    </div>
                    <div className="fourier-magphase">
                        <FourierGraph data={data3} xcoord={freqDomain ? 'ξ' : 'x'} ycoord={freqDomain ? '|F(ξ)|' : '|f(x)|'} xscale={xScale} yscale={yScale}></FourierGraph>
                        <FourierGraph data={data4} xcoord={freqDomain ? 'ξ' : 'x'} ycoord={freqDomain ? 'Φ{F(ξ)}' : 'Φ{f(x)}'} xscale={xScale} yscale={Math.PI}></FourierGraph>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fourier;