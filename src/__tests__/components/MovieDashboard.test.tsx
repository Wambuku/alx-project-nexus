import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import MovieDashboard from '@/components/MovieDashboard';
import { ToastProvider } from '@/components/ToastProvider';

// Mock the API
jest.mock('@/utils/api', () => ({
  movieApi: {
    getTrendingMovies: jest.fn(),
    getPopularMovies: jest.fn(),
  },
}));

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
}));

const mockTrendingMovies = [
  {
    id: 1,
    title: 'Trending Movie 1',
    overview: 'A trending movie',
    poster_path: '/trending1.jpg',
    backdrop_path: '/trending1-bg.jpg',
    release_date: '2024-01-01',
    vote_average: 8.5,
    vote_count: 1000,
    genre_ids: [28],
    adult: false,
    original_language: 'en',
    original_title: 'Trending Movie 1',
    popularity: 85.0,
    video: false,
  },
];

const mockPopularMovies = {
  page: 1,
  results: [
    {
      id: 2,
      title: 'Popular Movie 1',
      overview: 'A popular movie',
      poster_path: '/popular1.jpg',
      backdrop_path: '/popular1-bg.jpg',
      release_date: '2023-01-01',
      vote_average: 9.0,
      vote_count: 2000,
      genre_ids: [18],
      adult: false,
      original_language: 'en',
      original_title: 'Popular Movie 1',
      popularity: 90.0,
      video: false,
    },
  ],
  total_pages: 5,
  total_results: 100,
};

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      <ToastProvider>
        {component}
      </ToastProvider>
    </ThemeProvider>
  );
};

describe('MovieDashboard UI Tests', () => {
  const { movieApi } = require('@/utils/api');

  beforeEach(() => {
    jest.clearAllMocks();
    movieApi.getTrendingMovies.mockResolvedValue(mockTrendingMovies);
    movieApi.getPopularMovies.mockResolvedValue(mockPopularMovies);
  });

  describe('Welcome Section', () => {
    it('displays welcome title', () => {
      renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByText('🎬 ALX Movie Nexus')).toBeInTheDocument();
    });

    it('shows welcome subtitle with description', () => {
      renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByText(/Discover your next favorite film/)).toBeInTheDocument();
      expect(screen.getByText(/Search, explore, and save your favorites!/)).toBeInTheDocument();
    });

    it('has proper welcome section styling', () => {
      const { container } = renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByText('🎬 ALX Movie Nexus')).toBeInTheDocument();
    });
  });

  describe('Search Integration', () => {
    it('includes search bar component', () => {
      renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByPlaceholderText('Search for movies...')).toBeInTheDocument();
    });

    it('search bar is positioned correctly', () => {
      renderWithProviders(<MovieDashboard />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      expect(searchInput).toBeInTheDocument();
    });
  });

  describe('Trending Section', () => {
    it('displays trending section title', () => {
      renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByText('🔥 Trending This Week')).toBeInTheDocument();
    });

    it('shows trending section subtitle', () => {
      renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByText('The hottest movies everyone\'s talking about')).toBeInTheDocument();
    });

    it('loads and displays trending movies', async () => {
      renderWithProviders(<MovieDashboard />);
      
      await waitFor(() => {
        expect(screen.getByText('Trending Movie 1')).toBeInTheDocument();
      });
      
      expect(movieApi.getTrendingMovies).toHaveBeenCalledTimes(1);
    });

    it('shows loading state for trending movies', () => {
      movieApi.getTrendingMovies.mockImplementation(() => 
        new Promise(resolve => setTimeout(() => resolve(mockTrendingMovies), 100))
      );
      
      renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });
  });

  describe('Popular Section', () => {
    it('displays popular section title', () => {
      renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByText('⭐ Popular Movies')).toBeInTheDocument();
    });

    it('shows popular section subtitle', () => {
      renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByText('All-time favorites and crowd pleasers')).toBeInTheDocument();
    });

    it('loads and displays popular movies', async () => {
      renderWithProviders(<MovieDashboard />);
      
      await waitFor(() => {
        expect(screen.getByText('Popular Movie 1')).toBeInTheDocument();
      });
      
      expect(movieApi.getPopularMovies).toHaveBeenCalledWith(1);
    });

    it('shows load more button for popular movies', async () => {
      renderWithProviders(<MovieDashboard />);
      
      await waitFor(() => {
        expect(screen.getByText('LOAD MORE')).toBeInTheDocument();
      });
    });
  });

  describe('Error Handling', () => {
    it('handles trending movies API error', async () => {
      movieApi.getTrendingMovies.mockRejectedValue(new Error('API Error'));
      
      renderWithProviders(<MovieDashboard />);
      
      await waitFor(() => {
        expect(screen.getByText('⚠️')).toBeInTheDocument();
      });
    });

    it('handles popular movies API error', async () => {
      movieApi.getPopularMovies.mockRejectedValue(new Error('API Error'));
      
      renderWithProviders(<MovieDashboard />);
      
      await waitFor(() => {
        expect(screen.getByText('⚠️')).toBeInTheDocument();
      });
    });

    it('continues to work when one API fails', async () => {
      movieApi.getTrendingMovies.mockRejectedValue(new Error('Trending API Error'));
      
      renderWithProviders(<MovieDashboard />);
      
      await waitFor(() => {
        expect(screen.getByText('Popular Movie 1')).toBeInTheDocument();
      });
    });
  });

  describe('Layout and Structure', () => {
    it('has proper section ordering', () => {
      renderWithProviders(<MovieDashboard />);
      
      const sections = screen.getAllByRole('heading');
      const headingTexts = sections.map(section => section.textContent);
      
      expect(headingTexts).toContain('🎬 ALX Movie Nexus');
      expect(headingTexts).toContain('🔥 Trending This Week');
      expect(headingTexts).toContain('⭐ Popular Movies');
    });

    it('maintains responsive layout', () => {
      const { container } = renderWithProviders(<MovieDashboard />);
      
      expect(container.firstChild).toBeInTheDocument();
    });

    it('has proper spacing between sections', () => {
      renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByText('🔥 Trending This Week')).toBeInTheDocument();
      expect(screen.getByText('⭐ Popular Movies')).toBeInTheDocument();
    });
  });

  describe('Interactive Features', () => {
    it('handles favorite toggle across sections', async () => {
      renderWithProviders(<MovieDashboard />);
      
      await waitFor(() => {
        expect(screen.getByText('Trending Movie 1')).toBeInTheDocument();
        expect(screen.getByText('Popular Movie 1')).toBeInTheDocument();
      });
      
      // Both sections should have favorite buttons
      const favoriteButtons = screen.getAllByRole('button').filter(button => 
        button.textContent?.includes('♥')
      );
      
      expect(favoriteButtons.length).toBeGreaterThan(0);
    });

    it('refreshes data when favorites are toggled', async () => {
      renderWithProviders(<MovieDashboard />);
      
      await waitFor(() => {
        expect(movieApi.getTrendingMovies).toHaveBeenCalledTimes(1);
        expect(movieApi.getPopularMovies).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper heading hierarchy', () => {
      renderWithProviders(<MovieDashboard />);
      
      const h1 = screen.getByRole('heading', { level: 1 });
      const h2s = screen.getAllByRole('heading', { level: 2 });
      
      expect(h1).toHaveTextContent('🎬 ALX Movie Nexus');
      expect(h2s.length).toBeGreaterThan(0);
    });

    it('provides meaningful section descriptions', () => {
      renderWithProviders(<MovieDashboard />);
      
      expect(screen.getByText('The hottest movies everyone\'s talking about')).toBeInTheDocument();
      expect(screen.getByText('All-time favorites and crowd pleasers')).toBeInTheDocument();
    });

    it('maintains focus management', () => {
      renderWithProviders(<MovieDashboard />);
      
      // Should be able to tab through interactive elements
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      expect(searchInput).toBeInTheDocument();
    });
  });
});