import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Share2 } from 'lucide-react';
import './ArticlePage.css';
import heroImage from '../assets/hero.png';

const ArticlePage = () => {
    const { id } = useParams();

    // Mock data lookup - in a real app this would be an API call
    // We'll use a simple map for now or just display generic content if ID doesn't match
    const getArticleData = (slug) => {
        if (slug === 'google-gemini-3') {
            return {
                title: "Google's Gemini 3 Sends Alphabet Stock Soaring",
                category: "Top Story",
                author: "Tech Correspondent",
                time: "2 hours ago",
                image: heroImage,
                content: `
          <p>Alphabet's stock jumped 5% following Google's unveiling of Gemini 3, its latest and most powerful AI model. Analysts are calling it a "genuinely strong model" that could help Google regain leadership in the generative AI landscape.</p>
          <p>The new model boasts significantly improved reasoning capabilities and a larger context window, allowing it to process vast amounts of information with unprecedented accuracy. "This is a pivotal moment for the company," said Sundar Pichai, CEO of Alphabet.</p>
          <h3>Market Reaction</h3>
          <p>Wall Street reacted positively to the news, with trading volume spiking immediately after the announcement. The surge in stock price added billions to Alphabet's market cap, signaling investor confidence in Google's AI strategy.</p>
          <h3>Technical Breakthroughs</h3>
          <p>Gemini 3 introduces a novel architecture that reduces hallucination rates by 40% compared to its predecessor. It also features enhanced multimodal capabilities, seamlessly understanding and generating text, code, images, and video.</p>
        `
            };
        }

        // Default generic article for other links
        return {
            title: decodeURIComponent(slug).replace(/-/g, ' '),
            category: "News",
            author: "AI World Staff",
            time: "Just now",
            image: null, // Use a placeholder or pattern
            content: `
        <p>This is a detailed report on the breaking news regarding <strong>${decodeURIComponent(slug).replace(/-/g, ' ')}</strong>.</p>
        <p>Our correspondents are currently gathering more information on this developing story. Early reports indicate significant developments that could have widespread implications for the industry.</p>
        <p>Experts suggest that this event marks a turning point. "We are seeing a shift in the paradigm," noted one industry analyst. The impact is expected to be felt across multiple sectors.</p>
        <h3>Key Takeaways</h3>
        <ul>
          <li>Major announcement impacting the AI sector.</li>
          <li>Market analysts are closely monitoring the situation.</li>
          <li>Further updates are expected in the coming hours.</li>
        </ul>
      `
        };
    };

    const article = getArticleData(id);

    return (
        <div className="article-page container">
            <div className="article-header">
                <Link to="/" className="back-link">
                    <ArrowLeft size={20} /> Back to News
                </Link>
                <span className="article-category">{article.category}</span>
                <h1 className="article-title">{article.title}</h1>
                <div className="article-meta">
                    <div className="meta-item">
                        <User size={16} /> <span>{article.author}</span>
                    </div>
                    <div className="meta-item">
                        <Clock size={16} /> <span>{article.time}</span>
                    </div>
                    <div className="meta-actions">
                        <button className="icon-btn"><Share2 size={20} /></button>
                    </div>
                </div>
            </div>

            {article.image && (
                <div className="article-hero-image">
                    <img src={article.image} alt={article.title} />
                </div>
            )}

            <div className="article-content">
                <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }}></div>

                <div className="article-sidebar">
                    <h3>Related Stories</h3>
                    <ul className="related-list">
                        <li><Link to="/article/ai-regulation-update">AI Regulation Update: What You Need to Know</Link></li>
                        <li><Link to="/article/nvidia-earnings-preview">NVIDIA Earnings Preview</Link></li>
                        <li><Link to="/article/openai-new-features">OpenAI Announces New Features</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
