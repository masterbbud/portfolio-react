import './Contact.css';
import '../../../App.css';
import { useEffect } from 'react';

function Contact({ arriveAtPage }) {
    
    useEffect(() => {
        arriveAtPage('App-contactbox', 'clickedContact');
    }, [])

    return (
        <div>
          Contact Page
        </div>
    );
}

export default Contact;