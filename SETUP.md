# ALX Movie Nexus - Setup Guide

## 🔑 TMDB API Key Setup

### 1. Get Your TMDB API Key

1. **Visit TMDB:** Go to [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. **Create Account:** Sign up for a free account
3. **Request API Key:** 
   - Go to your account settings
   - Click on "API" in the left sidebar
   - Click "Create" and select "Developer"
   - Fill out the application form (you can use "Educational Project" for type)
   - Accept the terms and submit

### 2. Configure Environment Variables

1. **Copy the example file:**
   ```bash
   cp .env.local.example .env.local
   ```

2. **Add your API key to `.env.local`:**
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_actual_api_key_here
   ```

   Replace `your_actual_api_key_here` with your actual TMDB API key.

### 3. Verify Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Test the application:**
   - Open [http://localhost:3000](http://localhost:3000)
   - You should see trending and popular movies loading
   - Try searching for a movie
   - Test the favorites functionality

### 🚨 Important Notes

- **Never commit your `.env.local` file** - it's already in `.gitignore`
- **API Key is free** - TMDB provides 1,000 requests per day for free accounts
- **Rate Limiting** - The API has rate limits, but they're generous for development

### 🔧 Troubleshooting

**Movies not loading?**
- Check your API key is correct in `.env.local`
- Restart your development server after adding the API key
- Check browser console for error messages

**API Rate Limit?**
- Free accounts get 1,000 requests per day
- Consider implementing caching for production use

**Images not loading?**
- TMDB images are served from `image.tmdb.org`
- Check your internet connection
- Verify the image domain is allowed in `next.config.js`