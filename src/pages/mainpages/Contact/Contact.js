import './Contact.css';
import '../../../App.css';
import { useEffect } from 'react';

function Contact({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-contactbox', 'clickedContact');
    }, [])

    return (
        <div className="indev">
          This page is in development.
        </div>
    );
}

export default Contact;