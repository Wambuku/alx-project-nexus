import axios from 'axios';
import { Movie, MovieDetails, ApiResponse } from '@/types/movie';

const API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const api = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const movieApi = {
  // Get trending movies
  getTrendingMovies: async (): Promise<Movie[]> => {
    const response = await api.get<ApiResponse<Movie>>('/trending/movie/week');
    return response.data.results;
  },

  // Get popular movies
  getPopularMovies: async (page: number = 1): Promise<ApiResponse<Movie>> => {
    const response = await api.get<ApiResponse<Movie>>('/movie/popular', {
      params: { page },
    });
    return response.data;
  },

  // Get movie details
  getMovieDetails: async (movieId: string): Promise<MovieDetails> => {
    const response = await api.get<MovieDetails>(`/movie/${movieId}`);
    return response.data;
  },

  // Search movies
  searchMovies: async (query: string, page: number = 1): Promise<ApiResponse<Movie>> => {
    const response = await api.get<ApiResponse<Movie>>('/search/movie', {
      params: { query, page },
    });
    return response.data;
  },

  // Get movie recommendations
  getRecommendations: async (movieId: string): Promise<Movie[]> => {
    const response = await api.get<ApiResponse<Movie>>(`/movie/${movieId}/recommendations`);
    return response.data.results;
  },
};

export const getImageUrl = (path: string, size: string = 'w500'): string => {
  return `https://image.tmdb.org/t/p/${size}${path}`;
};