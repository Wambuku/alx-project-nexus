import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import MovieCard from '@/components/MovieCard';
import { ToastProvider } from '@/components/ToastProvider';
import { it } from 'node:test';
import { it } from 'node:test';
import { describe } from 'node:test';
import { it } from 'node:test';
import { it } from 'node:test';
import { describe } from 'node:test';
import { it } from 'node:test';
import { it } from 'node:test';
import { it } from 'node:test';
import { describe } from 'node:test';
import { it } from 'node:test';
import { it } from 'node:test';
import { it } from 'node:test';
import { it } from 'node:test';
import { describe } from 'node:test';
import { it } from 'node:test';
import { it } from 'node:test';
import { it } from 'node:test';
import { it } from 'node:test';
import { it } from 'node:test';
import { describe } from 'node:test';
import { beforeEach } from 'node:test';
import { describe } from 'node:test';

// Mock Next.js router
const mockPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
    pathname: '/',
  }),
}));

// Mock localStorage
const mockLocalStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
};
Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage,
});

const mockMovie = {
  id: 1,
  title: 'The Shawshank Redemption',
  overview: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
  poster_path: '/test-poster.jpg',
  backdrop_path: '/test-backdrop.jpg',
  release_date: '1994-09-23',
  vote_average: 9.3,
  vote_count: 2500000,
  genre_ids: [18, 80],
  adult: false,
  original_language: 'en',
  original_title: 'The Shawshank Redemption',
  popularity: 95.5,
  video: false,
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

describe('MovieCard UI Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockLocalStorage.getItem.mockReturnValue('[]');
  });

  describe('Visual Elements', () => {
    it('renders movie title correctly', () => {
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
    });

    it('displays release year', () => {
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      expect(screen.getByText('1994')).toBeInTheDocument();
    });

    it('shows movie rating with star', () => {
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      expect(screen.getByText('9.3')).toBeInTheDocument();
      expect(screen.getByText('⭐')).toBeInTheDocument();
    });

    it('displays movie poster image', () => {
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      const image = screen.getByAltText('The Shawshank Redemption');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', '/test-poster.jpg');
    });

    it('handles missing release date gracefully', () => {
      const movieWithoutDate = { ...mockMovie, release_date: '' };
      renderWithProviders(<MovieCard movie={movieWithoutDate} />);
      
      expect(screen.getByText('TBA')).toBeInTheDocument();
    });
  });

  describe('Interactive Elements', () => {
    it('navigates to movie details when card is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      const card = screen.getByText('The Shawshank Redemption').closest('div');
      await user.click(card!);
      
      expect(mockPush).toHaveBeenCalledWith('/movie/1');
    });

    it('shows favorite button on hover', async () => {
      const user = userEvent.setup();
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      const card = screen.getByText('The Shawshank Redemption').closest('div');
      await user.hover(card!);
      
      // The favorite button should be visible (opacity changes on hover)
      const favoriteButton = screen.getByRole('button');
      expect(favoriteButton).toBeInTheDocument();
    });

    it('toggles favorite status when heart button is clicked', async () => {
      const user = userEvent.setup();
      const mockOnFavoriteToggle = jest.fn();
      
      renderWithProviders(
        <MovieCard movie={mockMovie} onFavoriteToggle={mockOnFavoriteToggle} />
      );
      
      const favoriteButton = screen.getByRole('button');
      await user.click(favoriteButton);
      
      expect(mockLocalStorage.setItem).toHaveBeenCalled();
      expect(mockOnFavoriteToggle).toHaveBeenCalled();
    });

    it('prevents navigation when favorite button is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      const favoriteButton = screen.getByRole('button');
      await user.click(favoriteButton);
      
      // Should not navigate when clicking favorite button
      expect(mockPush).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper button role for favorite button', () => {
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      const favoriteButton = screen.getByRole('button');
      expect(favoriteButton).toBeInTheDocument();
    });

    it('has proper alt text for movie image', () => {
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      const image = screen.getByAltText('The Shawshank Redemption');
      expect(image).toBeInTheDocument();
    });

    it('has proper heading structure', () => {
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveTextContent('The Shawshank Redemption');
    });
  });

  describe('Responsive Behavior', () => {
    it('renders without layout issues', () => {
      const { container } = renderWithProviders(<MovieCard movie={mockMovie} />);
      
      // Check that the card container exists and has content
      expect(container.firstChild).toBeInTheDocument();
      expect(container.firstChild).toHaveTextContent('The Shawshank Redemption');
    });

    it('handles long movie titles properly', () => {
      const longTitleMovie = {
        ...mockMovie,
        title: 'This is a Very Long Movie Title That Should Be Truncated Properly in the UI'
      };
      
      renderWithProviders(<MovieCard movie={longTitleMovie} />);
      
      expect(screen.getByText('This is a Very Long Movie Title That Should Be Truncated Properly in the UI')).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('handles missing poster path gracefully', () => {
      const movieWithoutPoster = { ...mockMovie, poster_path: null };
      renderWithProviders(<MovieCard movie={movieWithoutPoster} />);
      
      const image = screen.getByAltText('The Shawshank Redemption');
      expect(image).toHaveAttribute('src', '/placeholder-movie.svg');
    });

    it('handles localStorage errors gracefully', async () => {
      const user = userEvent.setup();
      mockLocalStorage.setItem.mockImplementation(() => {
        throw new Error('Storage full');
      });
      
      renderWithProviders(<MovieCard movie={mockMovie} />);
      
      const favoriteButton = screen.getByRole('button');
      
      // Should not crash when localStorage fails
      await expect(user.click(favoriteButton)).resolves.not.toThrow();
    });
  });
});