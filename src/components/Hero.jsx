import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.png';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <Link
                to="/article/google-gemini-3"
                className="hero-link"
            >
                <img src={heroImage} alt="Google Gemini AI" className="hero-image" />
                <div className="hero-overlay container">
                    <span className="hero-tag">Top Story</span>
                    <h1 className="hero-title">Google's Gemini 3 Sends Alphabet Stock Soaring</h1>
                    <p className="hero-summary">
                        Alphabet's stock jumped 5% following Google's unveiling of Gemini 3, its latest and most powerful AI model. Analysts are calling it a "genuinely strong model" that could help Google regain leadership.
                    </p>
                    <div className="hero-meta">
                        <span>LIVE UPDATE</span> 2 HOURS AGO
                    </div>
                </div>
            </Link>
        </section>
    );
};

export default Hero;
