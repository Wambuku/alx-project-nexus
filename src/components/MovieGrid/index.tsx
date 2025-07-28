import React from 'react';
import { Movie } from '@/types/movie';
import MovieCard from '@/components/MovieCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import { GridContainer, EmptyState, LoadMoreButton } from './styles';

interface MovieGridProps {
  movies: Movie[];
  loading?: boolean;
  error?: string | null;
  onLoadMore?: () => void;
  hasMore?: boolean;
  onFavoriteToggle?: () => void;
}

const MovieGrid: React.FC<MovieGridProps> = ({
  movies,
  loading = false,
  error = null,
  onLoadMore,
  hasMore = false,
  onFavoriteToggle,
}) => {
  if (error) {
    return (
      <EmptyState>
        <p>Error loading movies: {error}</p>
      </EmptyState>
    );
  }

  if (loading && movies.length === 0) {
    return <LoadingSpinner />;
  }

  if (!loading && movies.length === 0) {
    return (
      <EmptyState>
        <p>No movies found</p>
      </EmptyState>
    );
  }

  return (
    <>
      <GridContainer>
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onFavoriteToggle={onFavoriteToggle}
          />
        ))}
      </GridContainer>
      
      {hasMore && onLoadMore && (
        <LoadMoreButton onClick={onLoadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </LoadMoreButton>
      )}
    </>
  );
};

export default MovieGrid;