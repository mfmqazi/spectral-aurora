import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h4>AI NBC News</h4>
                        <ul>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Code of Ethics</a></li>
                            <li><a href="#">Terms of Service</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Sections</h4>
                        <ul>
                            <li><a href="#">Generative AI</a></li>
                            <li><a href="#">Robotics</a></li>
                            <li><a href="#">Policy</a></li>
                            <li><a href="#">Business</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h4>Connect</h4>
                        <ul>
                            <li><a href="#">Newsletter</a></li>
                            <li><a href="#">Twitter / X</a></li>
                            <li><a href="#">LinkedIn</a></li>
                            <li><a href="#">Facebook</a></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright">
                    &copy; 2025 AI NBC News. All Rights Reserved. Powered by MSNBC-inspired design.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
