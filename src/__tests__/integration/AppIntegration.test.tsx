import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import { ToastProvider } from '@/components/ToastProvider';
import MovieDashboard from '@/components/MovieDashboard';

// Mock Next.js router
const mockPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
    pathname: '/',
  }),
}));

// Mock the API with realistic data
jest.mock('@/utils/api', () => ({
  movieApi: {
    getTrendingMovies: jest.fn(),
    getPopularMovies: jest.fn(),
    searchMovies: jest.fn(),
  },
}));

const mockMovieData = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    poster_path: '/shawshank.jpg',
    backdrop_path: '/shawshank-bg.jpg',
    release_date: '1994-09-23',
    vote_average: 9.3,
    vote_count: 2500000,
    genre_ids: [18, 80],
    adult: false,
    original_language: 'en',
    original_title: 'The Shawshank Redemption',
    popularity: 95.5,
    video: false,
  },
  {
    id: 2,
    title: 'The Godfather',
    overview: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    poster_path: '/godfather.jpg',
    backdrop_path: '/godfather-bg.jpg',
    release_date: '1972-03-24',
    vote_average: 9.2,
    vote_count: 1800000,
    genre_ids: [18, 80],
    adult: false,
    original_language: 'en',
    original_title: 'The Godfather',
    popularity: 92.1,
    video: false,
  },
];

const renderApp = () => {
  return render(
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <MovieDashboard />
      </ToastProvider>
    </ThemeProvider>
  );
};

describe('ALX Movie Nexus - Full App Integration Tests', () => {
  const { movieApi } = require('@/utils/api');

  beforeEach(() => {
    jest.clearAllMocks();
    movieApi.getTrendingMovies.mockResolvedValue(mockMovieData);
    movieApi.getPopularMovies.mockResolvedValue({
      page: 1,
      results: mockMovieData,
      total_pages: 5,
      total_results: 100,
    });
    movieApi.searchMovies.mockResolvedValue({
      page: 1,
      results: mockMovieData,
      total_pages: 1,
      total_results: 2,
    });
  });

  describe('Complete User Journey', () => {
    it('loads the complete dashboard successfully', async () => {
      renderApp();
      
      // Check welcome section
      expect(screen.getByText('🎬 ALX Movie Nexus')).toBeInTheDocument();
      
      // Check search bar
      expect(screen.getByPlaceholderText('Search for movies...')).toBeInTheDocument();
      
      // Check section headers
      expect(screen.getByText('🔥 Trending This Week')).toBeInTheDocument();
      expect(screen.getByText('⭐ Popular Movies')).toBeInTheDocument();
      
      // Wait for movies to load
      await waitFor(() => {
        expect(screen.getAllByText('The Shawshank Redemption')).toHaveLength(2); // In both sections
        expect(screen.getAllByText('The Godfather')).toHaveLength(2);
      });
    });

    it('handles complete search workflow', async () => {
      const user = userEvent.setup();
      renderApp();
      
      // Wait for initial load
      await waitFor(() => {
        expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
      });
      
      // Perform search
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'Batman');
      await user.click(searchButton);
      
      // Check search results
      await waitFor(() => {
        expect(screen.getByText('Search results for "Batman" (2 found)')).toBeInTheDocument();
      });
      
      expect(movieApi.searchMovies).toHaveBeenCalledWith('Batman', 1);
    });

    it('handles movie card interactions', async () => {
      const user = userEvent.setup();
      renderApp();
      
      // Wait for movies to load
      await waitFor(() => {
        expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
      });
      
      // Click on a movie card
      const movieCard = screen.getAllByText('The Shawshank Redemption')[0].closest('div');
      await user.click(movieCard!);
      
      expect(mockPush).toHaveBeenCalledWith('/movie/1');
    });

    it('handles favorites workflow', async () => {
      const user = userEvent.setup();
      renderApp();
      
      // Wait for movies to load
      await waitFor(() => {
        expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
      });
      
      // Find and click favorite button
      const favoriteButtons = screen.getAllByRole('button').filter(button => 
        button.textContent?.includes('♥')
      );
      
      expect(favoriteButtons.length).toBeGreaterThan(0);
      
      if (favoriteButtons[0]) {
        await user.click(favoriteButtons[0]);
        
        // Should trigger localStorage interaction
        // (localStorage is mocked in jest.setup.js)
      }
    });
  });

  describe('Error Recovery', () => {
    it('handles API failures gracefully', async () => {
      movieApi.getTrendingMovies.mockRejectedValue(new Error('Network error'));
      movieApi.getPopularMovies.mockRejectedValue(new Error('Network error'));
      
      renderApp();
      
      // Should still show the welcome section
      expect(screen.getByText('🎬 ALX Movie Nexus')).toBeInTheDocument();
      
      // Should show error states
      await waitFor(() => {
        expect(screen.getAllByText('⚠️')).toHaveLength(2); // One for each failed section
      });
    });

    it('handles partial API failures', async () => {
      movieApi.getTrendingMovies.mockRejectedValue(new Error('Trending API error'));
      // Popular movies still work
      
      renderApp();
      
      await waitFor(() => {
        // Should show popular movies
        expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
        // Should show error for trending
        expect(screen.getByText('⚠️')).toBeInTheDocument();
      });
    });

    it('recovers from search errors', async () => {
      const user = userEvent.setup();
      movieApi.searchMovies.mockRejectedValue(new Error('Search API error'));
      
      renderApp();
      
      // Wait for initial load
      await waitFor(() => {
        expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
      });
      
      // Perform search that will fail
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'Batman');
      await user.click(searchButton);
      
      // Should show search section with no results
      await waitFor(() => {
        expect(screen.getByText('Search results for "Batman"')).toBeInTheDocument();
        expect(screen.getByText('No movies found')).toBeInTheDocument();
      });
    });
  });

  describe('Performance and UX', () => {
    it('shows loading states appropriately', async () => {
      // Delay API responses
      movieApi.getTrendingMovies.mockImplementation(() => 
        new Promise(resolve => setTimeout(() => resolve(mockMovieData), 100))
      );
      movieApi.getPopularMovies.mockImplementation(() => 
        new Promise(resolve => setTimeout(() => resolve({
          page: 1,
          results: mockMovieData,
          total_pages: 5,
          total_results: 100,
        }), 100))
      );
      
      renderApp();
      
      // Should show loading initially
      expect(screen.getAllByText('Loading...')).toHaveLength(2);
      
      // Should load content
      await waitFor(() => {
        expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
      }, { timeout: 2000 });
    });

    it('maintains responsive layout', () => {
      const { container } = renderApp();
      
      // Should have proper container structure
      expect(container.firstChild).toBeInTheDocument();
      
      // Should have all main sections
      expect(screen.getByText('🎬 ALX Movie Nexus')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Search for movies...')).toBeInTheDocument();
    });

    it('handles load more functionality', async () => {
      const user = userEvent.setup();
      renderApp();
      
      // Wait for initial load
      await waitFor(() => {
        expect(screen.getByText('LOAD MORE')).toBeInTheDocument();
      });
      
      const loadMoreButton = screen.getByText('LOAD MORE');
      await user.click(loadMoreButton);
      
      expect(movieApi.getPopularMovies).toHaveBeenCalledWith(2); // Next page
    });
  });

  describe('Accessibility Compliance', () => {
    it('has proper heading structure', async () => {
      renderApp();
      
      const h1 = screen.getByRole('heading', { level: 1 });
      const h2s = screen.getAllByRole('heading', { level: 2 });
      
      expect(h1).toHaveTextContent('🎬 ALX Movie Nexus');
      expect(h2s.length).toBeGreaterThanOrEqual(2);
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      renderApp();
      
      // Should be able to tab through interactive elements
      await user.tab();
      expect(screen.getByPlaceholderText('Search for movies...')).toHaveFocus();
      
      await user.tab();
      expect(screen.getByRole('button', { name: /search/i })).toHaveFocus();
    });

    it('provides meaningful alt text and labels', async () => {
      renderApp();
      
      await waitFor(() => {
        const images = screen.getAllByRole('img');
        images.forEach(img => {
          expect(img).toHaveAttribute('alt');
          expect(img.getAttribute('alt')).toBeTruthy();
        });
      });
    });
  });
});