import React from 'react';
import FacebookIcon from "../images/us/uim--facebook.svg";
import TwitterIcon from "../images/us/fa--twitter-square.svg";
import InstagramIcon from "../images/us/teenyicons--instagram-solid.svg";
import PaypalIcon from "../images/us/fontisto--paypal.svg";
import VisaIcon from "../images/us/fontisto--visa.svg";
import MastercardIcon from "../images/us/fontisto--mastercard.svg";
import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Customer Service</h3>
                    <ul>
                        <li>Contact Us: support@example.com</li>
                        <li>FAQs</li>
                        <li>Shipping & Returns</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Service</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>About Us</h3>
                    <p>We are a fashion-forward online store dedicated to providing the latest trends in clothing, footwear, and accessories. Our mission is to help you express your unique style and confidence.</p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer"><img src={FacebookIcon} alt="Facebook Icon" /></a>
                        <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer"><img src={TwitterIcon} alt="Twitter Icon" /></a>
                        <a href="https://www.instagram.com/example/" target="_blank" rel="noopener noreferrer"><img src={InstagramIcon} alt="Instagram Icon" /></a>
                    </div>
                </div>
                <div className="footer-section payment-methods">
                    <h3>Payment Methods</h3>
                    <div className="payment-icons">
                        <img src={PaypalIcon} alt="Paypal Icon" />
                        <img src={VisaIcon} alt="Visa Icon" />
                        <img src={MastercardIcon} alt="Mastercard Icon" />
                    </div>
                </div>
                <div className="footer-section">
                    <h3>Latest News</h3>
                    <ul>
                        <li>New Collection Launch Event - Join Us!</li>
                        <li>Summer Fashion Trends 2024</li>
                        <li>Exclusive Discounts for Subscribers</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Subscribe</h3>
                    <form>
                        <input type="email" placeholder="Enter your email" />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
