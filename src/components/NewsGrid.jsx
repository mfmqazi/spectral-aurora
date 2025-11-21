import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NewsGrid.css';
import { fetchEverything, formatArticleForDisplay } from '../services/newsService';

const NewsGrid = () => {
    const [newsItems, setNewsItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            setLoading(true);
            try {
                const articles = await fetchEverything('AI OR "artificial intelligence" OR technology', 6);
                const formattedArticles = articles.map(formatArticleForDisplay);
                setNewsItems(formattedArticles);
            } catch (error) {
                console.error('Failed to load news:', error);
            } finally {
                setLoading(false);
            }
        };

        loadNews();

        // Refresh news every 5 minutes
        const interval = setInterval(loadNews, 5 * 60 * 1000);
        return () => clearInterval(interval);
    }, []);

    const createSlug = (title) => {
        return encodeURIComponent(title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
    };

    if (loading) {
        return (
            <div className="news-grid">
                {[...Array(6)].map((_, index) => (
                    <div key={index} className="news-card loading">
                        <div className="loading-image"></div>
                        <div className="news-card-content">
                            <div className="loading-text"></div>
                            <div className="loading-text long"></div>
                            <div className="loading-text"></div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="news-grid">
            {newsItems.map((item, index) => (
                <Link
                    key={index}
                    to={`/article/${createSlug(item.title)}`}
                    state={{ article: item }}
                    className="news-card-link"
                >
                    <article className="news-card">
                        {item.image && item.image !== '/vite.svg' ? (
                            <img
                                src={item.image}
                                alt={item.title}
                                className="news-card-image"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                }}
                            />
                        ) : (
                            <div className="news-card-placeholder">
                                <span>📰</span>
                            </div>
                        )}
                        <div className="news-card-content">
                            <span className="news-category">{item.category}</span>
                            <h3 className="news-title">{item.title}</h3>
                            <p className="news-excerpt">{item.excerpt}</p>
                            <div className="news-meta">
                                <span>{item.author}</span>
                                <span>{item.time}</span>
                            </div>
                        </div>
                    </article>
                </Link>
            ))}
        </div>
    );
};

export default NewsGrid;
