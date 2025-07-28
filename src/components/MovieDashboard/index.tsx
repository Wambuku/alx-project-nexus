import React from 'react';
import MovieGrid from '@/components/MovieGrid';
import SearchBar from '@/components/SearchBar';
import { movieApi } from '@/utils/api';
import { useMovies, useTrendingMovies } from '@/hooks/useMovies';
import { DashboardContainer, Section, SectionTitle } from './styles';

const MovieDashboard: React.FC = () => {
  const {
    movies: trendingMovies,
    loading: trendingLoading,
    error: trendingError,
    refresh: refreshTrending,
  } = useTrendingMovies();

  const {
    movies: popularMovies,
    loading: popularLoading,
    error: popularError,
    hasMore: hasMorePopular,
    loadMore: loadMorePopular,
    refresh: refreshPopular,
  } = useMovies(movieApi.getPopularMovies);

  const handleFavoriteToggle = () => {
    // Trigger re-render to update favorite states
    refreshTrending();
    refreshPopular();
  };

  return (
    <DashboardContainer>
      <SearchBar />
      
      <Section>
        <SectionTitle>Trending This Week</SectionTitle>
        <MovieGrid
          movies={trendingMovies}
          loading={trendingLoading}
          error={trendingError}
          onFavoriteToggle={handleFavoriteToggle}
        />
      </Section>
      
      <Section>
        <SectionTitle>Popular Movies</SectionTitle>
        <MovieGrid
          movies={popularMovies}
          loading={popularLoading}
          error={popularError}
          hasMore={hasMorePopular}
          onLoadMore={loadMorePopular}
          onFavoriteToggle={handleFavoriteToggle}
        />
      </Section>
    </DashboardContainer>
  );
};

export default MovieDashboard;