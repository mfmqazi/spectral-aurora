import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import NewsGrid from './components/NewsGrid';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import ArticlePage from './components/ArticlePage';
import './App.css';

const Home = () => (
  <>
    <Hero />
    <div className="main-content">
      <section className="primary-feed">
        <NewsGrid />
      </section>
      <Sidebar />
    </div>
  </>
);

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Ticker />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/article/:id" element={<ArticlePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
