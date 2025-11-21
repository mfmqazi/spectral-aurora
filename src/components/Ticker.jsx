import React from 'react';
import './Ticker.css';

const Ticker = () => {
    const headlines = [
        "BREAKING: OpenAI announces GPT-5 release date rumors",
        "MARKETS: NVIDIA shares hit all-time high amid AI chip demand",
        "POLICY: EU passes landmark AI Act regulating high-risk models",
        "TECH: Google DeepMind solves 50-year-old math problem",
        "SECURITY: New AI worm 'Morris II' targets GenAI email assistants"
    ];

    return (
        <div className="ticker-wrap">
            <div className="ticker-label">Breaking News</div>
            <div className="ticker-content">
                {headlines.map((headline, index) => (
                    <div key={index} className="ticker-item">
                        <span>●</span> {headline}
                    </div>
                ))}
                {/* Duplicate for seamless loop */}
                {headlines.map((headline, index) => (
                    <div key={`dup-${index}`} className="ticker-item">
                        <span>●</span> {headline}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ticker;
