# 🔑 Quick API Setup Guide

## Step 1: Get Your TMDB API Key

1. **Go to TMDB**: Visit [https://www.themoviedb.org/](https://www.themoviedb.org/)
2. **Sign Up/Login**: Create a free account or login
3. **Go to API Settings**: 
   - Click your profile icon (top right)
   - Select "Settings"
   - Click "API" in the left sidebar
4. **Request API Key**:
   - Click "Create" 
   - Select "Developer"
   - Fill out the form:
     - **Application Name**: ALX Movie Nexus
     - **Application URL**: http://localhost:3000
     - **Application Summary**: Educational project for ALX ProDev program
   - Accept terms and submit

## Step 2: Configure Your Environment

1. **Copy the example file**:
   ```bash
   cp .env.local.example .env.local
   ```

2. **Edit .env.local** and replace `your_tmdb_api_key_here` with your actual API key:
   ```env
   NEXT_PUBLIC_TMDB_API_KEY=your_actual_api_key_from_tmdb
   ```

## Step 3: Restart Your Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## ✅ Verify It's Working

- Open [http://localhost:3000](http://localhost:3000)
- You should see trending movies loading
- No more 401 Unauthorized errors in console

## 🚨 Troubleshooting

**Still getting 401 errors?**
- Double-check your API key is correct
- Make sure there are no extra spaces in the .env.local file
- Restart your development server after adding the key
- Check that the file is named `.env.local` (not `.env.local.txt`)

**API key not working immediately?**
- TMDB API keys can take a few minutes to activate
- Try again in 5-10 minutes if you just created it

## 🔒 Security Note

- Never commit your `.env.local` file to git
- The file is already in `.gitignore` for your protection
- Your API key should remain private