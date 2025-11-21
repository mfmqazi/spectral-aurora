# AI NBC News Portal

A modern, MSNBC-inspired news portal built with React and Vite that displays real-time AI and technology news.

## Features

- 🌐 **Real-time News**: Fetches the latest news from NewsAPI
- 🎨 **Modern Design**: Bright, clean MSNBC-inspired interface
- 📱 **Responsive Layout**: Works beautifully on all devices
- 🔄 **Auto-refresh**: News updates automatically every 5-10 minutes
- 🚀 **Fast Performance**: Built with Vite for optimal speed
- 🔗 **Internal Routing**: Seamless navigation with React Router

## Live Demo

Visit: [https://mfmqazi.github.io/spectral-aurora/](https://mfmqazi.github.io/spectral-aurora/)

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Get a NewsAPI Key (Free)

1. Go to [https://newsapi.org/register](https://newsapi.org/register)
2. Sign up for a free account
3. Copy your API key

### 3. Configure Environment Variables

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and add your NewsAPI key:
   ```
   VITE_NEWS_API_KEY=your_actual_api_key_here
   ```

### 4. Run Development Server

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## Deployment to GitHub Pages

1. Build and deploy:
   ```bash
   npm run deploy
   ```

2. Your site will be live at: `https://YOUR_USERNAME.github.io/spectral-aurora/`

**Note**: For GitHub Pages deployment with the NewsAPI key, you'll need to either:
- Use GitHub Secrets and add the key to your workflow
- Use a backend proxy to keep your API key secure
- Accept that the free NewsAPI tier has CORS restrictions for client-side apps in production

## Project Structure

```
spectral-aurora/
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # React components
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── NewsGrid.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Ticker.jsx
│   │   ├── Footer.jsx
│   │   └── ArticlePage.jsx
│   ├── services/        # API services
│   │   └── newsService.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env.example         # Environment variables example
└── package.json
```

## Technologies Used

- **React 19** - UI framework
- **Vite 7** - Build tool
- **React Router** - Client-side routing
- **NewsAPI** - Real-time news data
- **Lucide React** - Icons
- **CSS3** - Styling with custom properties

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## License

MIT

## Credits

Designed and developed as a modern news portal inspired by MSNBC's aesthetic.
