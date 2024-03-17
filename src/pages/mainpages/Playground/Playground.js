import './Playground.css';
import '../../../App.css';
import { useEffect } from 'react';

function Playground({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-playground', 'clickedPlayground');
    }, [])

    return (
        <div className="playground-background">

        </div>
    );
}

export default Playground;