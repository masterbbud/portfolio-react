import './Home.css';
import '../../../App.css';
import { useEffect } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Splatter from '../../../components/Splatter/Splatter.js';
import { allInfo } from '../Projects/Projects.js';

function Home({ arriveAtPage }) {

    const navigate = useNavigate();

    useEffect(() => {
        arriveAtPage('App-homebox', 'clickedHome');
        document.body.style.backgroundColor = '#943208';
    }, [])

    return (
        <div className="home-background">
            <div className="home-tiles-wrapper">
                <div className="home-tiles">
                    <div className="home-tilerow">
                        
                    </div>
                    {[...Array(10)].map(((v, k) => 
                        <div key={k} className={"home-tilerow" + (k % 2 == 0 ? " home-evenrow" : "")}>
                            {[...Array(20)].map(((e, i) => 
                                <div key={i} className="home-hex"></div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div id="home-projectscroller" className="home-projectscroller">
                <div className="home-scrollablelist">
                    {allInfo.map(((v, k) => 
                        <div key={k} className="home-projecticon"
                            // onClick={() => {
                            //     document.getElementById("App-coverbar").style.background = "";
                            //     navigate("projects/" + v.url);
                            // }}
                        ><img src={v.image}></img></div>
                    ))}
                </div>
                <div className="home-scrollablelist">
                    {allInfo.map(((v, k) => 
                        <div key={k} className="home-projecticon"
                            // onClick={() => {
                            //     document.getElementById("App-coverbar").style.background = "";
                            //     navigate("projects/" + v.url);
                            // }}
                        ><img src={v.image}></img></div>
                    ))}
                </div>
            </div>
            
            <div className="home-header">
                <div>Brandon</div>
                <div>Faunce</div>
                {/* <Splatter seed={1} color="#fff"></Splatter> */}
            </div>
            
        </div>
    );
}

export default Home;