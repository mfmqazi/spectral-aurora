import React from 'react';
import { Link } from 'react-router-dom';
import './NewsGrid.css';
import news1 from '../assets/news1.png';
import news2 from '../assets/news2.png';
import news3 from '../assets/news3.png';
import news4 from '../assets/news4.png';
import news5 from '../assets/news5.png';
import news6 from '../assets/news6.png';

const NewsGrid = () => {
    const newsItems = [
        {
            category: "Defense",
            title: "Helsing and Saab Integrate AI into Eurofighter",
            excerpt: "Helsing's AI software, Cirra, will be integrated into the Eurofighter's future electronic warfare system.",
            time: "4 hours ago",
            author: "Defense Weekly",
            image: news1
        },
        {
            category: "Business",
            title: "Cisco Invests in Spatial Intelligence Pioneer World Labs",
            excerpt: "Cisco Investments is backing World Labs, an AI startup founded by Dr. Fei-Fei Li focusing on 3D environments.",
            time: "6 hours ago",
            author: "TechCrunch",
            image: news2
        },
        {
            category: "Finance",
            title: "Wells Fargo Names Executive to Lead AI Initiatives",
            excerpt: "Saul Van Beurden appointed to lead the company's artificial intelligence operations as banks race to adopt GenAI.",
            time: "8 hours ago",
            author: "Bloomberg",
            image: news3
        },
        {
            category: "Science",
            title: "Hungarian Researchers Develop Brain-Inspired AI Vision",
            excerpt: "New AI-based vision model inspired by the human brain aims to create more accurate machine vision systems.",
            time: "10 hours ago",
            author: "Science Daily",
            image: news4
        },
        {
            category: "Opinion",
            title: "Tech Leaders Downplay AI 'Bubble' Concerns",
            excerpt: "Nvidia executives suggest differences in infrastructure application indicate sustainable growth.",
            time: "12 hours ago",
            author: "Reuters",
            image: news5
        },
        {
            category: "Society",
            title: "Discussions Around AI's Impact on Employment",
            excerpt: "New reports highlight growing anxiety among creative professionals about AI replacement.",
            time: "14 hours ago",
            author: "The Guardian",
            image: news6
        }
    ];

    const createSlug = (title) => {
        return encodeURIComponent(title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''));
    };

    return (
        <div className="news-grid">
            {newsItems.map((item, index) => (
                <Link
                    key={index}
                    to={`/article/${createSlug(item.title)}`}
                    className="news-card-link"
                >
                    <article className="news-card">
                        <img src={item.image} alt={item.title} className="news-card-image" />
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
