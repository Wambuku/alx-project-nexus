import React from 'react';
import MovieGrid from '@/components/MovieGrid';
import SearchBar from '@/components/SearchBar';
import { movieApi } from '@/utils/api';
import { useMovies, useTrendingMovies } from '@/hooks/useMovies';
import { 
  DashboardContainer, 
  Section, 
  SectionHeader,
  SectionTitle, 
  SectionSubtitle,
  WelcomeSection,
  WelcomeTitle,
  WelcomeSubtitle
} from './styles';

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
      <WelcomeSection>
        <WelcomeTitle>🎬 ALX Movie Nexus</WelcomeTitle>
        <WelcomeSubtitle>
          Discover your next favorite film with our curated collection of trending and popular movies. 
          Search, explore, and save your favorites!
        </WelcomeSubtitle>
      </WelcomeSection>

      <SearchBar />
      
      <Section>
        <SectionHeader>
          <div>
            <SectionTitle>🔥 Trending This Week</SectionTitle>
            <SectionSubtitle>The hottest movies everyone's talking about</SectionSubtitle>
          </div>
        </SectionHeader>
        <MovieGrid
          movies={trendingMovies}
          loading={trendingLoading}
          error={trendingError}
          onFavoriteToggle={handleFavoriteToggle}
        />
      </Section>
      
      <Section>
        <SectionHeader>
          <div>
            <SectionTitle>⭐ Popular Movies</SectionTitle>
            <SectionSubtitle>All-time favorites and crowd pleasers</SectionSubtitle>
          </div>
        </SectionHeader>
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