# How to Get Real-Time News Working

Your AI NBC News Portal is now configured to fetch **real-time news** from NewsAPI! However, you need to add your own API key to make it work.

## Quick Setup (5 minutes)

### Step 1: Get Your Free API Key

1. Go to: **https://newsapi.org/register**
2. Fill out the registration form:
   - Enter your email address
   - Choose a password
   - Select "I'm an individual" (free tier)
3. Click **"Submit"**
4. Check your email and verify your account
5. Copy your **API key** from the dashboard

### Step 2: Add the API Key to Your Project

1. Open the `.env` file in your project root
2. Replace `DEMO_KEY` with your actual API key:
   ```
   VITE_NEWS_API_KEY=your_actual_api_key_here
   ```
3. Save the file

### Step 3: Test Locally

1. Restart your development server:
   ```bash
   npm run dev
   ```
2. Open `http://localhost:5173`
3. You should now see **real-time news articles**!

### Step 4: Deploy to GitHub Pages (Optional)

**Note**: NewsAPI has CORS restrictions that prevent client-side apps from using the API key directly in production. Here are your options:

#### Option A: Use for Local Development Only
- Keep using the API locally for development
- The deployed site will show placeholder news

#### Option B: Build a Backend Proxy (Recommended for Production)
- Create a simple backend server (Node.js/Python/etc.)
- Have it proxy requests to NewsAPI
- This keeps your API key secure

#### Option C: Use an Alternative News API
- Consider using APIs that support client-side CORS:
  - **GNews API** (https://gnews.io/) - Supports CORS
  - **The Guardian API** (https://open-platform.theguardian.com/)
  - **New York Times API** (https://developer.nytimes.com/)

## Features Now Available

✅ **Automatic Updates**:
- Hero section refreshes every 10 minutes
- News grid refreshes every 5 minutes

✅ **Real-Time Content**:
- Latest AI and technology news
- Top headlines from major sources
- Articles from the past 7 days

✅ **Slower Ticker**:
- Animation slowed from 30s to 50s
- Much more readable!

✅ **Loading States**:
- Beautiful skeleton loading animations
- Graceful error handling
- Fallback content if API fails

## Troubleshooting

### "Please configure NEWS API key" message
- Your API key isn't set or is invalid
- Check that you copied it correctly to `.env`
- Make sure the `.env` file is in the project root

### News not updating
- Check browser console for errors
- Verify your API key is active on newsapi.org
- Free tier has rate limits (500 requests/day)

### CORS errors in production
- This is expected with NewsAPI's free tier
- Use one of the solutions in Step 4 above

## API Key Limits (Free Tier)

- **500 requests per day**
- **Articles from last 30 days only**
- **No commercial use**
- **Developer/non-production use**

For production sites, consider upgrading to a paid plan or using an alternative API.

---

**Need help?** Check the main [README.md](./README.md) for more information.
