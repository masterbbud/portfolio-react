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
            <div className="home-header">
                <div>Brandon</div>
                <div>Faunce</div>
                {/* <Splatter seed={1} color="#fff"></Splatter> */}
            </div>
        </div>
    );
}

export default Home;