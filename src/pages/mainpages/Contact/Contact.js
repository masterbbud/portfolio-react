import './Contact.css';
import '../../../App.css';
import { useEffect } from 'react';

function Contact({ arriveAtPage }) {

    useEffect(() => {
        arriveAtPage('App-contactbox', 'clickedContact');
    }, [])

    return (
        <div className="contact-background">
            <div className="pre-header">
                
            </div>
            <div className="header">
                Get in Touch
            </div>
            <div className="contact-options">
                <div className="contact-card email">
                    <img src={require('../../../icons/mail.png')} className='contact-icon'/>
                    <a href="mailto:bfaunce28@gmail.com" className='contact-text'>bfaunce28@gmail.com</a>
                </div>
                <div className="contact-card linkedin">
                    <img src={require('../../../icons/linkedin.png')} className='contact-icon'/>
                    <a href="https://linkedin.com/in/bfaunce28" className='contact-text'>bfaunce28</a>
                </div>
                <div className="contact-card github">
                    <img src={require('../../../icons/github.png')} className='contact-icon'/>
                    <a href="https://github.com/masterbbud" className='contact-text'>masterbbud</a>
                </div>
            </div>
            <div className="contact-background2"></div>
        </div>
    );
}

export default Contact;