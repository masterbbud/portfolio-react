import './Home.css';
import '../../../App.css';
import { useEffect } from 'react';
import Splatter from '../../../components/Splatter/Splatter.js';

function Home({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-homebox', 'clickedHome');
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
            
            <div className="home-header">
                <div>Brandon</div>
                <div>Faunce</div>
                {/* <Splatter seed={1} color="#fff"></Splatter> */}
            </div>
            
        </div>
    );
}

export default Home;