import './Home.css';
import '../../../App.css';
import { useEffect } from 'react';

function Home({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-homebox', 'clickedHome');
    }, [])

    return (
        <div>
          Home Page
        </div>
    );
}

export default Home;