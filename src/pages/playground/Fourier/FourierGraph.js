import './Fourier.css';
import '../../../App.css';
import '../Playground.css';
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as d3 from "d3";

function FourierGraph({ data, xcoord, ycoord, xscale, yscale }) {

    const width = window.innerWidth/3;
    const height = window.innerHeight/3;

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
    }, [data, xscale, yscale]);

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
        if (xscale != -1) {
            maxX = xscale;
        }
        if (yscale != -1) {
            maxY = yscale;
        }
        graphDetails.xScale.domain([-maxX * 1.2, maxX * 1.2]);
        graphDetails.yScale.domain([-maxY * 1.2, maxY * 1.2]);
        graphDetails.lineGenerator.x(d => graphDetails.xScale(d["x"]))
        .y(d => graphDetails.yScale(d["y"]))
        const newLine = graphDetails.lineGenerator(data);
        setLineData(newLine);
    }

    useEffect(() => void d3.select(gy.current).call(d3.axisLeft(graphDetails.yScale)), [gy, data, xscale, yscale]);
    useEffect(() => void d3.select(gx.current).call(d3.axisBottom(graphDetails.xScale)), [gx, data, xscale, yscale]);

    return (
        <div className="fourier-graph">
            <svg width={width}
                height={height}
                preserveAspectRatio="none">
                    <g ref={gy} transform={`translate(${width/2},0)`} />
                    <g ref={gx} transform={`translate(0,${height/2})`} />
                    <path fill="none" stroke="currentColor" strokeWidth="1.5" d={lineData} />                
            </svg>
            <div className="fourier-graph-xlabel">
                <p><i>{xcoord}</i></p>
            </div>
            <div className="fourier-graph-ylabel">
                <p><i>{ycoord}</i></p>
            </div>
        </div>
    );
}

export default FourierGraph;