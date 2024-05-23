import React from 'react';
import './Contact.scss';
import bg from '../images/webp/kids/bg1.mp4';
import Nav from '../components/Navbar';

const Contact = () => {
    return (
        <div>
            <Nav />
            <div className="contact-container">
                <div className="video-overlay"></div>
                <video autoPlay loop muted className="background-video">
                    <source src={bg} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="content">
                    <h1>Contact Us</h1>
                    <p>We'd love to hear from you!</p>
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" rows="5" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
