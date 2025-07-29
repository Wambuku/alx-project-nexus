import axios from 'axios';
import { Movie, MovieDetails, ApiResponse } from '@/types/movie';

// Using OMDb API as primary (free, just needs API key)
const OMDB_API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;
const OMDB_BASE_URL = 'https://www.omdbapi.com';

// Backup: TMDB API
const TMDB_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Debug: Log environment variables on load
console.log('🔧 Environment check:');
console.log('- TMDB_API_KEY:', TMDB_API_KEY ? `${TMDB_API_KEY.substring(0, 8)}...` : 'NOT FOUND');
console.log('- NODE_ENV:', process.env.NODE_ENV);

// Fallback to demo data if no API key
const DEMO_MOVIES: Movie[] = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    poster_path: "/placeholder-movie.svg",
    backdrop_path: "/placeholder-movie.svg",
    release_date: "1994-09-23",
    vote_average: 9.3,
    vote_count: 2500000,
    genre_ids: [18, 80],
    adult: false,
    original_language: "en",
    original_title: "The Shawshank Redemption",
    popularity: 95.5,
    video: false
  },
  {
    id: 2,
    title: "The Godfather",
    overview: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
    poster_path: "/placeholder-movie.svg",
    backdrop_path: "/placeholder-movie.svg",
    release_date: "1972-03-24",
    vote_average: 9.2,
    vote_count: 1800000,
    genre_ids: [18, 80],
    adult: false,
    original_language: "en",
    original_title: "The Godfather",
    popularity: 92.1,
    video: false
  },
  {
    id: 3,
    title: "The Dark Knight",
    overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
    poster_path: "/placeholder-movie.svg",
    backdrop_path: "/placeholder-movie.svg",
    release_date: "2008-07-18",
    vote_average: 9.0,
    vote_count: 2200000,
    genre_ids: [28, 18, 80],
    adult: false,
    original_language: "en",
    original_title: "The Dark Knight",
    popularity: 88.7,
    video: false
  },
  {
    id: 4,
    title: "Pulp Fiction",
    overview: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption.",
    poster_path: "/placeholder-movie.svg",
    backdrop_path: "/placeholder-movie.svg",
    release_date: "1994-10-14",
    vote_average: 8.9,
    vote_count: 1900000,
    genre_ids: [80, 18],
    adult: false,
    original_language: "en",
    original_title: "Pulp Fiction",
    popularity: 85.3,
    video: false
  },
  {
    id: 5,
    title: "Forrest Gump",
    overview: "The presidencies of Kennedy and Johnson, the Vietnam War, and other historical events unfold from the perspective of an Alabama man.",
    poster_path: "/placeholder-movie.svg",
    backdrop_path: "/placeholder-movie.svg",
    release_date: "1994-07-06",
    vote_average: 8.8,
    vote_count: 2100000,
    genre_ids: [18, 10749],
    adult: false,
    original_language: "en",
    original_title: "Forrest Gump",
    popularity: 82.9,
    video: false
  },
  {
    id: 6,
    title: "Inception",
    overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.",
    poster_path: "/placeholder-movie.svg",
    backdrop_path: "/placeholder-movie.svg",
    release_date: "2010-07-16",
    vote_average: 8.7,
    vote_count: 2000000,
    genre_ids: [28, 878, 53],
    adult: false,
    original_language: "en",
    original_title: "Inception",
    popularity: 89.4,
    video: false
  }
];

// Remove unused code

import { omdbApi } from './alternativeApis';

// Create TMDB API instance
const tmdbApi = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

export const movieApi = {
  // Get trending movies - Try TMDB first (since you have the key), then OMDb, then demo data
  getTrendingMovies: async (): Promise<Movie[]> => {
    // Debug: Check if API key is loaded
    console.log('🔑 TMDB_API_KEY:', TMDB_API_KEY ? `${TMDB_API_KEY.substring(0, 8)}...` : 'NOT FOUND');
    console.log('🌐 TMDB_BASE_URL:', TMDB_BASE_URL);
    
    // Try TMDB API first (you have this key)
    if (TMDB_API_KEY) {
      try {
        console.log('🚀 Attempting TMDB API call for trending movies...');
        console.log('📡 Request URL:', `${TMDB_BASE_URL}/trending/movie/week?api_key=${TMDB_API_KEY.substring(0, 8)}...`);
        
        const response = await tmdbApi.get<ApiResponse<Movie>>('/trending/movie/week');
        console.log('✅ TMDB API SUCCESS! Got', response.data.results.length, 'movies');
        console.log('🎬 First movie:', response.data.results[0]?.title, 'poster:', response.data.results[0]?.poster_path);
        return response.data.results;
      } catch (error) {
        console.error('❌ TMDB API FAILED with error:', error);
        if (axios.isAxiosError(error)) {
          console.error('📊 Status:', error.response?.status);
          console.error('📝 Response:', error.response?.data);
          console.error('🔗 URL:', error.config?.url);
        }
        console.warn('TMDB API failed, trying OMDb...');
      }
    } else {
      console.warn('⚠️ No TMDB API key found in environment variables');
    }

    // Try OMDb API as backup
    if (OMDB_API_KEY) {
      try {
        const omdbMovies = await omdbApi.getTrendingMovies();
        if (omdbMovies.length > 0) {
          console.log('Using OMDb API for trending movies');
          return omdbMovies;
        }
      } catch (error) {
        console.warn('OMDb API failed...');
      }
    }

    // Final fallback to demo data
    console.log('⚠️ Using demo data for trending movies');
    return DEMO_MOVIES.slice(0, 4);
  },

  // Get popular movies
  getPopularMovies: async (page: number = 1): Promise<ApiResponse<Movie>> => {
    // Try TMDB API first (you have this key)
    if (TMDB_API_KEY) {
      try {
        console.log('Attempting TMDB API call for popular movies...');
        const response = await tmdbApi.get<ApiResponse<Movie>>('/movie/popular', {
          params: { page },
        });
        console.log('✅ Using TMDB API for popular movies', response.data.results.length, 'movies');
        return response.data;
      } catch (error) {
        console.error('❌ TMDB API failed:', error);
        console.warn('TMDB API failed, trying OMDb...');
      }
    } else {
      console.warn('⚠️ No TMDB API key found');
    }

    // Try OMDb API as backup
    if (OMDB_API_KEY) {
      try {
        const omdbResult = await omdbApi.getPopularMovies(page);
        if (omdbResult.results.length > 0) {
          console.log('Using OMDb API for popular movies');
          return omdbResult;
        }
      } catch (error) {
        console.warn('OMDb API failed...');
      }
    }

    // Final fallback to demo data
    console.log('⚠️ Using demo data for popular movies');
    return {
      page: 1,
      results: DEMO_MOVIES,
      total_pages: 1,
      total_results: DEMO_MOVIES.length
    };
  },

  // Get movie details
  getMovieDetails: async (movieId: string): Promise<MovieDetails> => {
    // Try OMDb API first
    if (OMDB_API_KEY) {
      try {
        const omdbMovie = await omdbApi.getMovieDetails(movieId);
        console.log('Using OMDb API for movie details');
        return omdbMovie;
      } catch (error) {
        console.warn('OMDb API failed, trying TMDB...');
      }
    }

    // Fallback to TMDB
    if (TMDB_API_KEY) {
      try {
        const response = await tmdbApi.get<MovieDetails>(`/movie/${movieId}`);
        console.log('Using TMDB API for movie details');
        return response.data;
      } catch (error) {
        console.warn('TMDB API failed, using demo data...');
      }
    }

    // Final fallback to demo data
    const demoMovie = DEMO_MOVIES.find(m => m.id.toString() === movieId);
    if (demoMovie) {
      console.log('Using demo data for movie details');
      return {
        ...demoMovie,
        genres: [{ id: 18, name: 'Drama' }, { id: 80, name: 'Crime' }],
        runtime: 142,
        budget: 25000000,
        revenue: 16000000,
        production_companies: [],
        production_countries: [],
        spoken_languages: [],
        status: 'Released',
        tagline: 'Demo movie for ALX Movie Nexus'
      };
    }

    throw new Error('Movie not found');
  },

  // Search movies
  searchMovies: async (query: string, page: number = 1): Promise<ApiResponse<Movie>> => {
    // Try OMDb API first
    if (OMDB_API_KEY) {
      try {
        const omdbResult = await omdbApi.searchMovies(query, page);
        if (omdbResult.results.length > 0) {
          console.log('Using OMDb API for search');
          return omdbResult;
        }
      } catch (error) {
        console.warn('OMDb API search failed, trying TMDB...');
      }
    }

    // Fallback to TMDB
    if (TMDB_API_KEY) {
      try {
        const response = await tmdbApi.get<ApiResponse<Movie>>('/search/movie', {
          params: { query, page },
        });
        console.log('Using TMDB API for search');
        return response.data;
      } catch (error) {
        console.warn('TMDB API search failed, using demo data...');
      }
    }

    // Final fallback to demo data search
    console.log('Using demo data for search');
    const filteredMovies = DEMO_MOVIES.filter(movie => 
      movie.title.toLowerCase().includes(query.toLowerCase())
    );
    return {
      page: 1,
      results: filteredMovies,
      total_pages: 1,
      total_results: filteredMovies.length
    };
  },

  // Get movie recommendations
  getRecommendations: async (movieId: string): Promise<Movie[]> => {
    // Try OMDb API first
    if (OMDB_API_KEY) {
      try {
        const omdbRecs = await omdbApi.getRecommendations();
        if (omdbRecs.length > 0) {
          console.log('Using OMDb API for recommendations');
          return omdbRecs;
        }
      } catch (error) {
        console.warn('OMDb API recommendations failed, trying TMDB...');
      }
    }

    // Fallback to TMDB
    if (TMDB_API_KEY) {
      try {
        const response = await tmdbApi.get<ApiResponse<Movie>>(`/movie/${movieId}/recommendations`);
        console.log('Using TMDB API for recommendations');
        return response.data.results;
      } catch (error) {
        console.warn('TMDB API recommendations failed, using demo data...');
      }
    }

    // Final fallback to demo data
    console.log('Using demo data for recommendations');
    return DEMO_MOVIES.filter(m => m.id.toString() !== movieId).slice(0, 4);
  },
};

export const getImageUrl = (path: string, size: string = 'w500'): string => {
  if (!path || path === '/placeholder-movie.svg' || path === 'null') {
    return '/placeholder-movie.svg';
  }
  
  // Ensure path starts with /
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `https://image.tmdb.org/t/p/${size}${cleanPath}`;
};