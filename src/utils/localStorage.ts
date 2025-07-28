import { Movie } from '@/types/movie';

const FAVORITES_KEY = 'movie-nexus-favorites';

export const favoritesStorage = {
  // Get all favorites
  getFavorites: (): Movie[] => {
    if (typeof window === 'undefined') return [];
    
    try {
      const favorites = localStorage.getItem(FAVORITES_KEY);
      return favorites ? JSON.parse(favorites) : [];
    } catch (error) {
      console.error('Error reading favorites from localStorage:', error);
      return [];
    }
  },

  // Add movie to favorites
  addFavorite: (movie: Movie): void => {
    if (typeof window === 'undefined') return;
    
    try {
      const favorites = favoritesStorage.getFavorites();
      const isAlreadyFavorite = favorites.some(fav => fav.id === movie.id);
      
      if (!isAlreadyFavorite) {
        const updatedFavorites = [...favorites, movie];
        localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
      }
    } catch (error) {
      console.error('Error adding favorite to localStorage:', error);
    }
  },

  // Remove movie from favorites
  removeFavorite: (movieId: number): void => {
    if (typeof window === 'undefined') return;
    
    try {
      const favorites = favoritesStorage.getFavorites();
      const updatedFavorites = favorites.filter(movie => movie.id !== movieId);
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(updatedFavorites));
    } catch (error) {
      console.error('Error removing favorite from localStorage:', error);
    }
  },

  // Check if movie is favorite
  isFavorite: (movieId: number): boolean => {
    const favorites = favoritesStorage.getFavorites();
    return favorites.some(movie => movie.id === movieId);
  },
};