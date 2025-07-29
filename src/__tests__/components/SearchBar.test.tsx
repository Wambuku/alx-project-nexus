import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';
import SearchBar from '@/components/SearchBar';
import { ToastProvider } from '@/components/ToastProvider';

// Mock the API
jest.mock('@/utils/api', () => ({
  movieApi: {
    searchMovies: jest.fn(),
  },
}));

// Mock Next.js router
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: jest.fn(),
    pathname: '/',
  }),
}));

const mockSearchResults = {
  page: 1,
  results: [
    {
      id: 1,
      title: 'Search Result Movie',
      overview: 'A movie found through search',
      poster_path: '/search-result.jpg',
      backdrop_path: '/search-bg.jpg',
      release_date: '2024-01-01',
      vote_average: 8.0,
      vote_count: 1000,
      genre_ids: [28],
      adult: false,
      original_language: 'en',
      original_title: 'Search Result Movie',
      popularity: 80.0,
      video: false,
    },
  ],
  total_pages: 1,
  total_results: 1,
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

describe('SearchBar UI Tests', () => {
  const { movieApi } = require('@/utils/api');

  beforeEach(() => {
    jest.clearAllMocks();
    movieApi.searchMovies.mockResolvedValue(mockSearchResults);
  });

  describe('Search Input', () => {
    it('renders search input field', () => {
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      expect(searchInput).toBeInTheDocument();
    });

    it('allows typing in search input', async () => {
      const user = userEvent.setup();
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      await user.type(searchInput, 'Batman');
      
      expect(searchInput).toHaveValue('Batman');
    });

    it('shows search button', () => {
      renderWithProviders(<SearchBar />);
      
      const searchButton = screen.getByRole('button', { name: /search/i });
      expect(searchButton).toBeInTheDocument();
    });

    it('disables search button when input is empty', () => {
      renderWithProviders(<SearchBar />);
      
      const searchButton = screen.getByRole('button', { name: /search/i });
      expect(searchButton).toBeDisabled();
    });

    it('enables search button when input has text', async () => {
      const user = userEvent.setup();
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'Batman');
      
      expect(searchButton).not.toBeDisabled();
    });
  });

  describe('Search Functionality', () => {
    it('performs search when search button is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'Batman');
      await user.click(searchButton);
      
      expect(movieApi.searchMovies).toHaveBeenCalledWith('Batman', 1);
    });

    it('performs search when Enter key is pressed', async () => {
      const user = userEvent.setup();
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      
      await user.type(searchInput, 'Superman');
      await user.keyboard('{Enter}');
      
      expect(movieApi.searchMovies).toHaveBeenCalledWith('Superman', 1);
    });

    it('shows loading state during search', async () => {
      const user = userEvent.setup();
      movieApi.searchMovies.mockImplementation(() => 
        new Promise(resolve => setTimeout(() => resolve(mockSearchResults), 100))
      );
      
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'Batman');
      await user.click(searchButton);
      
      expect(screen.getByText('Searching...')).toBeInTheDocument();
    });

    it('displays search results', async () => {
      const user = userEvent.setup();
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'Batman');
      await user.click(searchButton);
      
      await waitFor(() => {
        expect(screen.getByText('Search results for "Batman"')).toBeInTheDocument();
        expect(screen.getByText('Search Result Movie')).toBeInTheDocument();
      });
    });

    it('shows result count in search title', async () => {
      const user = userEvent.setup();
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'Batman');
      await user.click(searchButton);
      
      await waitFor(() => {
        expect(screen.getByText('Search results for "Batman" (1 found)')).toBeInTheDocument();
      });
    });
  });

  describe('Clear Functionality', () => {
    it('shows clear button after search', async () => {
      const user = userEvent.setup();
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'Batman');
      await user.click(searchButton);
      
      await waitFor(() => {
        expect(screen.getByRole('button', { name: /clear/i })).toBeInTheDocument();
      });
    });

    it('clears search when clear button is clicked', async () => {
      const user = userEvent.setup();
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'Batman');
      await user.click(searchButton);
      
      await waitFor(() => {
        expect(screen.getByText('Search Result Movie')).toBeInTheDocument();
      });
      
      const clearButton = screen.getByRole('button', { name: /clear/i });
      await user.click(clearButton);
      
      expect(searchInput).toHaveValue('');
      expect(screen.queryByText('Search Result Movie')).not.toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('handles search API errors gracefully', async () => {
      const user = userEvent.setup();
      movieApi.searchMovies.mockRejectedValue(new Error('API Error'));
      
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'Batman');
      await user.click(searchButton);
      
      await waitFor(() => {
        expect(screen.getByText('Search results for "Batman"')).toBeInTheDocument();
        expect(screen.getByText('No movies found')).toBeInTheDocument();
      });
    });

    it('shows empty state when no results found', async () => {
      const user = userEvent.setup();
      movieApi.searchMovies.mockResolvedValue({
        ...mockSearchResults,
        results: [],
        total_results: 0,
      });
      
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      const searchButton = screen.getByRole('button', { name: /search/i });
      
      await user.type(searchInput, 'NonexistentMovie');
      await user.click(searchButton);
      
      await waitFor(() => {
        expect(screen.getByText('No movies found')).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('has proper form structure', () => {
      renderWithProviders(<SearchBar />);
      
      const form = screen.getByRole('search') || screen.getByRole('form');
      expect(form || screen.getByPlaceholderText('Search for movies...')).toBeInTheDocument();
    });

    it('has proper button labels', () => {
      renderWithProviders(<SearchBar />);
      
      expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      renderWithProviders(<SearchBar />);
      
      const searchInput = screen.getByPlaceholderText('Search for movies...');
      
      await user.tab();
      expect(searchInput).toHaveFocus();
      
      await user.type(searchInput, 'Batman');
      await user.tab();
      
      const searchButton = screen.getByRole('button', { name: /search/i });
      expect(searchButton).toHaveFocus();
    });
  });
});