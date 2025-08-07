# ALX Movie Nexus

A comprehensive movie recommendation application built for the ALX ProDev Frontend Engineering program. This project demonstrates modern frontend development practices including dynamic routing, API integration, and responsive design.

## 🎯 Project Overview

ALX Movie Nexus is a movie recommendation app that allows users to:
- Browse trending and popular movies with infinite scroll
- Search for movies with real-time results
- View detailed movie information with dynamic routing
- Save favorite movies locally with toast notifications
- Get personalized movie recommendations
- Enjoy a responsive, interactive user interface with smooth animations

## 🚀 Technologies Used

- **Framework:** Next.js 14 with TypeScript
- **Styling:** Styled Components with custom theme system
- **API:** The Movie Database (TMDB) API
- **State Management:** React hooks and local storage
- **Development Tools:** ESLint, Prettier, Jest

## 📁 Project Structure

```
alx-movie-nexus/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Layout/         # App layout components
│   │   ├── MovieDashboard/ # Main dashboard
│   │   ├── MovieDetails/   # Movie detail view
│   │   └── FavoritesList/  # Favorites management
│   ├── pages/              # Next.js pages
│   │   ├── movie/[id].tsx  # Dynamic movie pages
│   │   ├── favorites.tsx   # Favorites page
│   │   └── index.tsx       # Home page
│   ├── styles/             # Global styles and theme
│   ├── types/              # TypeScript type definitions
│   └── utils/              # Utility functions and API
└── public/                 # Static assets
```

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm/yarn
- TMDB API key (free registration at [themoviedb.org](https://www.themoviedb.org/))

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alx-movie-nexus
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.local.example .env.local
   ```
   Add your TMDB API key to `.env.local`:
   ```
   NEXT_PUBLIC_TMDB_API_KEY=your_actual_api_key_here
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎨 Key Features

### 🎬 Movie Discovery
- **Trending Movies**: Weekly trending films from TMDB
- **Popular Movies**: Paginated popular movies with "Load More"
- **Search Functionality**: Real-time movie search with pagination
- **Movie Details**: Comprehensive movie information with backdrop images

### 🚀 Dynamic Routing
- Individual movie pages using Next.js dynamic routes (`/movie/[id]`)
- Server-side rendering for optimal SEO and performance
- Smooth page transitions with custom animations

### 💾 Favorites System
- Persistent favorite movies storage using localStorage
- Add/remove favorites with heart button animations
- Toast notifications for user feedback
- Dedicated favorites page with grid layout

### 🎨 Enhanced UI/UX
- **Responsive Design**: Mobile-first approach with breakpoints
- **Smooth Animations**: Card hover effects, loading spinners, page transitions
- **Interactive Elements**: Heart animations, scroll-to-top button
- **Dark Theme**: Modern dark theme with custom color palette
- **Loading States**: Beautiful loading spinners and skeleton screens

### 🔧 Technical Features
- **TypeScript**: Full type safety throughout the application
- **Styled Components**: CSS-in-JS with theme system
- **Custom Hooks**: Reusable logic for API calls and state management
- **Error Boundaries**: Graceful error handling and recovery
- **Image Optimization**: Next.js Image component with lazy loading

## 🧪 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run test         # Run tests
```

## 📱 Responsive Breakpoints

- **Mobile:** 480px and below
- **Tablet:** 768px and below
- **Desktop:** 1024px and above
- **Large:** 1200px and above

## 🎯 Learning Objectives

This project demonstrates:
- Modern React patterns with TypeScript
- Next.js dynamic routing and SSR
- API integration with error handling
- Local storage for data persistence
- Responsive design with styled-components
- Component-based architecture
- Git workflow with descriptive commits

## 🚀 Deployment

The application is configured for easy deployment on:
- **Vercel** (recommended for Next.js)
- **Netlify**

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel
1. Push your code to GitHub
2. Import repository in Vercel
3. Add `NEXT_PUBLIC_TMDB_API_KEY` environment variable
4. Deploy!

## 🤝 Contributing

This project follows ALX ProDev collaboration guidelines:
1. Fork the repository
2. Create a feature branch
3. Make your changes with descriptive commits
4. Submit a pull request

## 📄 License

Built for educational purposes as part of the ALX ProDev Frontend Engineering program.

---

**ALX ProDev Frontend Engineering Program** - Building the next generation of frontend developers.
