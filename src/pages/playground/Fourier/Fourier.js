import './Fourier.css';
import '../../../App.css';
import '../Playground.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as d3 from "d3";

function Fourier() {

    const [data, setData] = useState([]);
    const width = window.innerWidth/3;
    const height = window.innerHeight/3;
    const margin = 50;

    const gx = useRef();
    const gy = useRef();

    const graphDetails = {
        xScale: d3.scaleLinear().range([0, width]),
        yScale: d3.scaleLinear().range([height, 0]),
        lineGenerator: d3.line()
    };

    const [lineData, setLineData] = useState(() =>
        graphDetails.lineGenerator(data)
    );

    useEffect(() => {
        if (data) {
            recalculateLine();
        }
    }, [data]);

    function recalculateLine() {
        // Calculate the data line
        let [maxX, maxY] = [0, 0];
        data.forEach(d => {
            if (Math.abs(d.y) > maxY) {
                maxY = Math.abs(d.y);
            }
            if (Math.abs(d.x) > maxX) {
                maxX = Math.abs(d.x);
            }
        })
        graphDetails.xScale.domain([-maxX, maxX]);
        graphDetails.yScale.domain([-maxY, maxY]);
        graphDetails.lineGenerator.x(d => graphDetails.xScale(d["x"]))
        .y(d => graphDetails.yScale(d["y"]))
        const newLine = graphDetails.lineGenerator(data);
        setLineData(newLine);
    }

    useEffect(() => void d3.select(gy.current).call(d3.axisLeft(graphDetails.yScale)), [gy, data]);
    useEffect(() => void d3.select(gx.current).call(d3.axisBottom(graphDetails.xScale)), [gx, data]);

    // useEffect(() => void d3.select(gx.current).call(d3.axisBottom(x)), [gx, data]);
    // useEffect(() => void d3.select(gy.current).call(d3.axisLeft(y)), [gy, data]);

    function loadData() {
        let newData = [];
        for (let i = 0; i < 100; i++) {
            newData.push({x: i, y: Math.sqrt(i)});
        }
        setData(newData);
    }

    useEffect(() => loadData(), []);

    return (
        <div className="fourier-background">
            <div>Here is the fourier experiment.</div>
            <div className="fourier-graph">
                <svg width={width}
                    height={height}
                    preserveAspectRatio="none">
                        <g ref={gy} transform={`translate(${width/2},0)`} />
                        <g ref={gx} transform={`translate(0,${height/2})`} />
                        <path fill="none" stroke="currentColor" strokeWidth="1.5" d={lineData} />
                    {/* <g ref={gy} transform={`translate(0,${data[0]?.value})`} />
                    <g ref={gx} transform={`translate(${x(0)},0)`} /> */}
                    {/* <path fill="none" stroke="currentColor" strokeWidth="1.5" d={line(data)} />
                    <g fill="white" stroke="currentColor" strokeWidth="1.5">
                        {data.map((d, i) => (<circle key={i} cx={x(i)} cy={d.value} r="2.5" />))}
                    </g> */}
                    
                </svg>
                <div className="fourier-graph-xlabel">
                    <p>x</p>
                </div>
                <div className="fourier-graph-ylabel">
                    <p>f(a)</p>
                </div>
            </div>
            
            
        </div>
    );
}

export default Fourier;