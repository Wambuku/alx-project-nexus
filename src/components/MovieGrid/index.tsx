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
        <div className="icon">⚠️</div>
        <div className="message">Oops! Something went wrong</div>
        <div className="submessage">{error}</div>
      </EmptyState>
    );
  }

  if (loading && movies.length === 0) {
    return <LoadingSpinner />;
  }

  if (!loading && movies.length === 0) {
    return (
      <EmptyState>
        <div className="icon">🎬</div>
        <div className="message">No movies found</div>
        <div className="submessage">Try adjusting your search or browse our trending movies</div>
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