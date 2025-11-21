import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    const trending = [
        "Why Sam Altman is visiting the White House today",
        "NVIDIA's new chip could change gaming forever",
        "China's AI regulations: What you need to know",
        "Elon Musk sues OpenAI (Again)",
        "Top 10 AI tools for productivity in 2025"
    ];

    const createSlug = (title) => {
        return encodeURIComponent(title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
    };

    return (
        <aside className="sidebar">
            <h3 className="sidebar-title">Trending Now</h3>
            <ul className="trending-list">
                {trending.map((item, index) => (
                    <li key={index} className="trending-item">
                        <span className="trending-rank">{index + 1}</span>
                        <Link
                            to={`/article/${createSlug(item)}`}
                            className="trending-link"
                        >
                            {item}
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default Sidebar;
