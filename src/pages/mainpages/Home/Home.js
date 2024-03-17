import './Home.css';
import '../../../App.css';
import { useEffect } from 'react';

function Home({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-homebox', 'clickedHome');
    }, [])

    return (
        <div className="home-background">
            <div className="home-header">
                <div>Brandon</div>
                <div>Faunce</div>
            </div>
        </div>
    );
}

export default Home;