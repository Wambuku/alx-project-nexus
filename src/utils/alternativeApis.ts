import axios from 'axios';
import { Movie, MovieDetails, ApiResponse } from '@/types/movie';

// OMDb API - Free with simple registration
const OMDB_API_KEY = process.env.NEXT_PUBLIC_OMDB_API_KEY;

// Convert OMDb response to our Movie interface
const convertOMDbToMovie = (omdbMovie: any, index: number): Movie => ({
  id: parseInt(omdbMovie.imdbID.replace('tt', '')) || index,
  title: omdbMovie.Title,
  overview: omdbMovie.Plot || 'No overview available',
  poster_path: omdbMovie.Poster !== 'N/A' ? omdbMovie.Poster : '/placeholder-movie.svg',
  backdrop_path: omdbMovie.Poster !== 'N/A' ? omdbMovie.Poster : '/placeholder-movie.svg',
  release_date: omdbMovie.Year ? `${omdbMovie.Year}-01-01` : '2024-01-01',
  vote_average: omdbMovie.imdbRating ? parseFloat(omdbMovie.imdbRating) : 7.0,
  vote_count: omdbMovie.imdbVotes ? parseInt(omdbMovie.imdbVotes.replace(/,/g, '')) : 1000,
  genre_ids: [18], // Default to Drama
  adult: false,
  original_language: 'en',
  original_title: omdbMovie.Title,
  popularity: omdbMovie.imdbRating ? parseFloat(omdbMovie.imdbRating) * 10 : 70,
  video: false
});

// Popular movie titles to search for
const POPULAR_MOVIES = [
  'The Shawshank Redemption',
  'The Godfather',
  'The Dark Knight',
  'Pulp Fiction',
  'Forrest Gump',
  'Inception',
  'The Matrix',
  'Goodfellas',
  'The Lord of the Rings',
  'Star Wars',
  'Titanic',
  'Avatar',
  'Avengers',
  'Spider-Man',
  'Batman',
  'Superman',
  'Iron Man',
  'Jurassic Park',
  'Terminator',
  'Back to the Future'
];

const TRENDING_MOVIES = [
  'Oppenheimer',
  'Barbie',
  'Spider-Man: No Way Home',
  'Top Gun: Maverick',
  'Black Panther',
  'Dune',
  'No Time to Die',
  'Fast X'
];

export const omdbApi = {
  // Get trending movies (simulate with recent popular movies)
  getTrendingMovies: async (): Promise<Movie[]> => {
    if (!OMDB_API_KEY) {
      console.warn('No OMDb API key found');
      return [];
    }

    try {
      const moviePromises = TRENDING_MOVIES.slice(0, 6).map(async (title, index) => {
        const response = await axios.get(OMDB_API_KEY ? 
          `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_API_KEY}` :
          `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=demo`
        );
        
        if (response.data.Response === 'True') {
          return convertOMDbToMovie(response.data, index + 100);
        }
        return null;
      });

      const movies = await Promise.all(moviePromises);
      return movies.filter(movie => movie !== null) as Movie[];
    } catch (error) {
      console.error('OMDb API error:', error);
      return [];
    }
  },

  // Get popular movies
  getPopularMovies: async (page: number = 1): Promise<ApiResponse<Movie>> => {
    if (!OMDB_API_KEY) {
      return { page: 1, results: [], total_pages: 1, total_results: 0 };
    }

    try {
      const startIndex = (page - 1) * 10;
      const endIndex = startIndex + 10;
      const moviesToFetch = POPULAR_MOVIES.slice(startIndex, endIndex);

      const moviePromises = moviesToFetch.map(async (title, index) => {
        const response = await axios.get(
          `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_API_KEY}`
        );
        
        if (response.data.Response === 'True') {
          return convertOMDbToMovie(response.data, startIndex + index);
        }
        return null;
      });

      const movies = await Promise.all(moviePromises);
      const validMovies = movies.filter(movie => movie !== null) as Movie[];

      return {
        page,
        results: validMovies,
        total_pages: Math.ceil(POPULAR_MOVIES.length / 10),
        total_results: POPULAR_MOVIES.length
      };
    } catch (error) {
      console.error('OMDb API error:', error);
      return { page: 1, results: [], total_pages: 1, total_results: 0 };
    }
  },

  // Get movie details
  getMovieDetails: async (movieId: string): Promise<MovieDetails> => {
    if (!OMDB_API_KEY) {
      throw new Error('No OMDb API key configured');
    }

    try {
      // For demo, we'll search by a popular movie title based on ID
      const movieIndex = parseInt(movieId) % POPULAR_MOVIES.length;
      const title = POPULAR_MOVIES[movieIndex];
      
      const response = await axios.get(
        `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&plot=full&apikey=${OMDB_API_KEY}`
      );

      if (response.data.Response === 'True') {
        const movie = convertOMDbToMovie(response.data, parseInt(movieId));
        return {
          ...movie,
          genres: response.data.Genre ? 
            response.data.Genre.split(', ').map((name: string, index: number) => ({ id: index, name })) :
            [{ id: 1, name: 'Drama' }],
          runtime: response.data.Runtime ? parseInt(response.data.Runtime) : 120,
          budget: 0,
          revenue: 0,
          production_companies: [],
          production_countries: response.data.Country ? 
            response.data.Country.split(', ').map((name: string) => ({ iso_3166_1: 'US', name })) : [],
          spoken_languages: [],
          status: 'Released',
          tagline: response.data.Plot || 'A great movie'
        };
      }
      
      throw new Error('Movie not found');
    } catch (error) {
      console.error('OMDb API error:', error);
      throw new Error('Movie not found');
    }
  },

  // Search movies
  searchMovies: async (query: string, page: number = 1): Promise<ApiResponse<Movie>> => {
    if (!OMDB_API_KEY) {
      return { page: 1, results: [], total_pages: 1, total_results: 0 };
    }

    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&page=${page}&apikey=${OMDB_API_KEY}`
      );

      if (response.data.Response === 'True') {
        const movies = response.data.Search.map((movie: any, index: number) => 
          convertOMDbToMovie(movie, index)
        );

        return {
          page,
          results: movies,
          total_pages: Math.ceil(response.data.totalResults / 10),
          total_results: parseInt(response.data.totalResults)
        };
      }

      return { page: 1, results: [], total_pages: 1, total_results: 0 };
    } catch (error) {
      console.error('OMDb API error:', error);
      return { page: 1, results: [], total_pages: 1, total_results: 0 };
    }
  },

  // Get recommendations (simulate with similar movies)
  getRecommendations: async (movieId: string): Promise<Movie[]> => {
    if (!OMDB_API_KEY) {
      return [];
    }

    try {
      // Get 4 random popular movies as recommendations
      const shuffled = [...POPULAR_MOVIES].sort(() => 0.5 - Math.random());
      const recommendations = shuffled.slice(0, 4);

      const moviePromises = recommendations.map(async (title, index) => {
        const response = await axios.get(
          `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${OMDB_API_KEY}`
        );
        
        if (response.data.Response === 'True') {
          return convertOMDbToMovie(response.data, index + 200);
        }
        return null;
      });

      const movies = await Promise.all(moviePromises);
      return movies.filter(movie => movie !== null) as Movie[];
    } catch (error) {
      console.error('OMDb API error:', error);
      return [];
    }
  }
};