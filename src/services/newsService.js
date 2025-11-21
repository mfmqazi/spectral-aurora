// News API Service for fetching real-time news
// Get your free API key from: https://newsapi.org/register

const NEWS_API_KEY = import.meta.env.VITE_NEWS_API_KEY || 'DEMO_KEY';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchTopHeadlines = async (category = 'technology', country = 'us') => {
    try {
        const response = await fetch(
            `${BASE_URL}/top-headlines?country=${country}&category=${category}&pageSize=20&apiKey=${NEWS_API_KEY}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        return data.articles || [];
    } catch (error) {
        console.error('Error fetching news:', error);
        return getFallbackNews();
    }
};

export const fetchEverything = async (query = 'AI OR artificial intelligence', pageSize = 20) => {
    try {
        const today = new Date();
        const sevenDaysAgo = new Date(today.setDate(today.getDate() - 7));
        const formattedDate = sevenDaysAgo.toISOString().split('T')[0];

        const response = await fetch(
            `${BASE_URL}/everything?q=${encodeURIComponent(query)}&from=${formattedDate}&sortBy=publishedAt&language=en&pageSize=${pageSize}&apiKey=${NEWS_API_KEY}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch news');
        }

        const data = await response.json();
        return data.articles || [];
    } catch (error) {
        console.error('Error fetching news:', error);
        return getFallbackNews();
    }
};

export const formatArticleForDisplay = (article) => {
    return {
        category: article.source?.name || 'News',
        title: article.title || 'No title available',
        excerpt: article.description || article.content?.substring(0, 150) + '...' || 'No description available',
        time: getTimeAgo(article.publishedAt),
        author: article.author || article.source?.name || 'Unknown',
        image: article.urlToImage || '/vite.svg', // Fallback image
        url: article.url,
        publishedAt: article.publishedAt
    };
};

const getTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now - date;
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInHours < 1) {
        const diffInMins = Math.floor(diffInMs / (1000 * 60));
        return `${diffInMins} ${diffInMins === 1 ? 'minute' : 'minutes'} ago`;
    } else if (diffInHours < 24) {
        return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    } else {
        return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    }
};

// Fallback news if API fails or no API key
const getFallbackNews = () => {
    return [
        {
            source: { name: 'Tech News' },
            title: 'Please configure NEWS API key to see real-time news',
            description: 'Get your free API key from https://newsapi.org/register and add it to your .env file as VITE_NEWS_API_KEY',
            urlToImage: null,
            publishedAt: new Date().toISOString(),
            author: 'System',
            url: 'https://newsapi.org/register'
        }
    ];
};
