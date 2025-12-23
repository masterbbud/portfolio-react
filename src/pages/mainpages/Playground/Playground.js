import './Playground.css';
import '../../../App.css';
import { useEffect } from 'react';

function Playground({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-playground', 'clickedPlayground');
        document.body.style.backgroundColor = '#296399';
    }, [])

    return (
        <div className="playground-background">

        </div>
    );
}

export default Playground;