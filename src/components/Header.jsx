import React from 'react';
import { Menu, Search, Tv, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const date = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });

    return (
        <header className="header">
            <div className="container">
                <div className="header-top">
                    <button className="icon-btn">
                        <Menu color="white" size={28} />
                    </button>

                    <Link to="/" className="logo">
                        <span>AI</span> NBC
                    </Link>

                    <div className="header-actions">
                        <span className="date">{date}</span>
                        <button className="live-tv-btn">
                            <Tv size={18} /> Live TV
                        </button>
                        <Search color="white" size={24} style={{ cursor: 'pointer' }} />
                        <User color="white" size={24} style={{ cursor: 'pointer' }} />
                    </div>
                </div>

                <nav className="nav-bar">
                    <ul className="nav-list">
                        <li className="nav-item"><Link to="/" className="active">Home</Link></li>
                        <li className="nav-item"><Link to="/category/generative-ai">Generative AI</Link></li>
                        <li className="nav-item"><Link to="/category/robotics">Robotics</Link></li>
                        <li className="nav-item"><Link to="/category/policy">Policy & Ethics</Link></li>
                        <li className="nav-item"><Link to="/category/business">Business</Link></li>
                        <li className="nav-item"><Link to="/category/research">Research</Link></li>
                        <li className="nav-item"><Link to="/category/opinion">Opinion</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
