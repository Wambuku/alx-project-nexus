import React, { useState, useEffect } from 'react';
import MovieGrid from '@/components/MovieGrid';
import { Movie } from '@/types/movie';
import { favoritesStorage } from '@/utils/localStorage';
import { FavoritesContainer, FavoritesTitle, EmptyFavorites } from './styles';

const FavoritesList: React.FC = () => {
  const [favorites, setFavorites] = useState<Movie[]>([]);
  const [isClient, setIsClient] = useState(false);

  const loadFavorites = () => {
    if (typeof window !== 'undefined') {
      const favoriteMovies = favoritesStorage.getFavorites();
      setFavorites(favoriteMovies);
    }
  };

  useEffect(() => {
    setIsClient(true);
    loadFavorites();
  }, []);

  const handleFavoriteToggle = () => {
    loadFavorites(); // Refresh the list when favorites change
  };

  // Don't render anything during SSR
  if (!isClient) {
    return (
      <FavoritesContainer>
        <FavoritesTitle>My Favorite Movies</FavoritesTitle>
        <EmptyFavorites>
          <p>Loading your favorites...</p>
        </EmptyFavorites>
      </FavoritesContainer>
    );
  }

  if (favorites.length === 0) {
    return (
      <FavoritesContainer>
        <FavoritesTitle>My Favorite Movies</FavoritesTitle>
        <EmptyFavorites>
          <p>You haven&apos;t added any favorite movies yet.</p>
          <p>Browse movies and click the heart icon to add them to your favorites!</p>
        </EmptyFavorites>
      </FavoritesContainer>
    );
  }

  return (
    <FavoritesContainer>
      <FavoritesTitle>My Favorite Movies ({favorites.length})</FavoritesTitle>
      <MovieGrid
        movies={favorites}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </FavoritesContainer>
  );
};

export default FavoritesList;