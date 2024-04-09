import './Splatter.css';
import '../../App.css';
import { useEffect, useState } from "react";

function Splatter({ seed, color }) {

    const [height, setHeight] = useState(500);
    const [width, setWidth] = useState(500);

    const [gradients, setGradients] = useState([]);

    useEffect(() =>
        {
            setGradients([[3, 11], [5, 7], [7, 9], [12, 13], [22, 13]]);
        }
    , []);

    function generateStyles() {
        this.style = {};
        
    }
    
    function animate() {
        for (let i = 0; i < 100; i++) {
            setTimeout(() => {
              setHeight(i * 5);
              setWidth(i * 5);
            }, i * 3)
        }
    }

    return (
        <div className="splatter" style={{
            width: width,
            height: height,
            background: gradients.map(
                (g, i) => {
                    let [first, second, end] = i == 0 || i == gradients.length - 1 ? ['#00f', '#0000', ''] : ['#0000', '#00f', ` 50% / ${110-10*(gradients.length - i)}% ${110-10*(gradients.length - i)}%`]
                    let gradientType = i == gradients.length - 1 ? 'radial-gradient' : 'repeating-conic-gradient';
                    return `${gradientType}(${first} 0 ${g[0]}%, ${second} 0 ${g[1]}%)${end}`
                }
            ).join(',') + ',#fff'
        }}></div>
    );
}

export default Splatter;
