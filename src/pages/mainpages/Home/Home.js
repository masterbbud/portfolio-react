import './Home.css';
import '../../../App.css';
import { useEffect } from 'react';

function Home({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-homebox', 'clickedHome');
    }, [])

    return (
        <div className="indev">
          This page is in development.
        </div>
    );
}

export default Home;