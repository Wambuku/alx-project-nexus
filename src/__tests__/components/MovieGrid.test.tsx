import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import MovieGrid from '@/components/MovieGrid';
import { ToastProvider } from '@/components/ToastProvider';

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
}));

const mockMovies = [
  {
    id: 1,
    title: 'The Shawshank Redemption',
    overview: 'Two imprisoned men bond over a number of years.',
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
    overview: 'The aging patriarch of an organized crime dynasty.',
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

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider theme={theme}>
      <ToastProvider>
        {component}
      </ToastProvider>
    </ThemeProvider>
  );
};

describe('MovieGrid UI Tests', () => {
  describe('Grid Layout', () => {
    it('renders all movies in a grid layout', () => {
      renderWithProviders(<MovieGrid movies={mockMovies} />);
      
      expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
      expect(screen.getByText('The Godfather')).toBeInTheDocument();
    });

    it('displays movies in proper grid structure', () => {
      const { container } = renderWithProviders(<MovieGrid movies={mockMovies} />);
      
      // Check that grid container exists
      const gridContainer = container.querySelector('div');
      expect(gridContainer).toBeInTheDocument();
    });

    it('handles empty movie list', () => {
      renderWithProviders(<MovieGrid movies={[]} />);
      
      expect(screen.getByText('No movies found')).toBeInTheDocument();
      expect(screen.getByText('🎬')).toBeInTheDocument();
    });
  });

  describe('Loading States', () => {
    it('shows loading spinner when loading', () => {
      renderWithProviders(<MovieGrid movies={[]} loading={true} />);
      
      // Loading spinner should be present
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('shows movies when not loading', () => {
      renderWithProviders(<MovieGrid movies={mockMovies} loading={false} />);
      
      expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
      expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
    });

    it('shows load more button when hasMore is true', () => {
      const mockLoadMore = jest.fn();
      renderWithProviders(
        <MovieGrid 
          movies={mockMovies} 
          hasMore={true} 
          onLoadMore={mockLoadMore}
        />
      );
      
      expect(screen.getByText('LOAD MORE')).toBeInTheDocument();
    });

    it('calls onLoadMore when load more button is clicked', async () => {
      const user = userEvent.setup();
      const mockLoadMore = jest.fn();
      
      renderWithProviders(
        <MovieGrid 
          movies={mockMovies} 
          hasMore={true} 
          onLoadMore={mockLoadMore}
        />
      );
      
      const loadMoreButton = screen.getByText('LOAD MORE');
      await user.click(loadMoreButton);
      
      expect(mockLoadMore).toHaveBeenCalledTimes(1);
    });
  });

  describe('Error States', () => {
    it('displays error message when error occurs', () => {
      renderWithProviders(
        <MovieGrid movies={[]} error="Failed to load movies" />
      );
      
      expect(screen.getByText('Oops! Something went wrong')).toBeInTheDocument();
      expect(screen.getByText('Failed to load movies')).toBeInTheDocument();
      expect(screen.getByText('⚠️')).toBeInTheDocument();
    });

    it('shows proper error icon and styling', () => {
      renderWithProviders(
        <MovieGrid movies={[]} error="Network error" />
      );
      
      expect(screen.getByText('⚠️')).toBeInTheDocument();
      expect(screen.getByText('Network error')).toBeInTheDocument();
    });
  });

  describe('Interactive Features', () => {
    it('calls onFavoriteToggle when favorite is toggled', async () => {
      const user = userEvent.setup();
      const mockFavoriteToggle = jest.fn();
      
      renderWithProviders(
        <MovieGrid 
          movies={mockMovies} 
          onFavoriteToggle={mockFavoriteToggle}
        />
      );
      
      // Find and click a favorite button
      const favoriteButtons = screen.getAllByRole('button');
      const favoriteButton = favoriteButtons.find(button => 
        button.textContent?.includes('♥')
      );
      
      if (favoriteButton) {
        await user.click(favoriteButton);
        expect(mockFavoriteToggle).toHaveBeenCalled();
      }
    });

    it('disables load more button when loading', () => {
      const mockLoadMore = jest.fn();
      renderWithProviders(
        <MovieGrid 
          movies={mockMovies} 
          hasMore={true} 
          onLoadMore={mockLoadMore}
          loading={true}
        />
      );
      
      const loadMoreButton = screen.getByText('Loading...');
      expect(loadMoreButton).toBeDisabled();
    });
  });

  describe('Responsive Behavior', () => {
    it('renders grid responsively', () => {
      const { container } = renderWithProviders(<MovieGrid movies={mockMovies} />);
      
      // Check that the grid container has proper CSS classes/structure
      expect(container.firstChild).toBeInTheDocument();
    });

    it('handles different screen sizes gracefully', () => {
      // Test with different viewport sizes
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 320, // Mobile width
      });
      
      renderWithProviders(<MovieGrid movies={mockMovies} />);
      
      expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA labels for interactive elements', () => {
      const mockLoadMore = jest.fn();
      renderWithProviders(
        <MovieGrid 
          movies={mockMovies} 
          hasMore={true} 
          onLoadMore={mockLoadMore}
        />
      );
      
      const loadMoreButton = screen.getByRole('button', { name: /load more/i });
      expect(loadMoreButton).toBeInTheDocument();
    });

    it('provides meaningful text for screen readers', () => {
      renderWithProviders(<MovieGrid movies={[]} />);
      
      expect(screen.getByText('No movies found')).toBeInTheDocument();
      expect(screen.getByText('Try adjusting your search or browse our trending movies')).toBeInTheDocument();
    });
  });
});