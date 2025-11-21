import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import { fetchTopHeadlines, formatArticleForDisplay } from '../services/newsService';
import defaultHero from '../assets/hero.png';

const Hero = () => {
    const [heroArticle, setHeroArticle] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadHeroNews = async () => {
            setLoading(true);
            try {
                const articles = await fetchTopHeadlines('technology', 'us');
                if (articles && articles.length > 0) {
                    const formatted = formatArticleForDisplay(articles[0]);
                    setHeroArticle(formatted);
                }
            } catch (error) {
                console.error('Failed to load hero news:', error);
            } finally {
                setLoading(false);
            }
        };

        loadHeroNews();

        // Refresh every 10 minutes
        const interval = setInterval(loadHeroNews, 10 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const createSlug = (title) => {
        return encodeURIComponent(title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
    };

    if (loading || !heroArticle) {
        return (
            <div className="hero">
                <div className="hero-image-container">
                    <img src={defaultHero} alt="Loading..." className="hero-image" />
                </div>
                <div className="hero-overlay">
                    <div className="loading-hero-content">
                        <div className="loading-text short"></div>
                        <div className="loading-text long"></div>
                        <div className="loading-text medium"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <Link
            to={`/article/${createSlug(heroArticle.title)}`}
            state={{ article: heroArticle }}
            className="hero-link"
        >
            <div className="hero">
                <div className="hero-image-container">
                    <img
                        src={heroArticle.image && heroArticle.image !== '/vite.svg' ? heroArticle.image : defaultHero}
                        alt={heroArticle.title}
                        className="hero-image"
                        onError={(e) => {
                            e.target.src = defaultHero;
                        }}
                    />
                </div>
                <div className="hero-overlay">
                    <span className="hero-tag">{heroArticle.category}</span>
                    <h1 className="hero-title">{heroArticle.title}</h1>
                    <p className="hero-summary">{heroArticle.excerpt}</p>
                    <div className="hero-meta">
                        <span>{heroArticle.author}</span> • {heroArticle.time}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Hero;
