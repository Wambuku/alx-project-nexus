import { useState, useEffect, useCallback } from 'react';
import { Movie, ApiResponse } from '@/types/movie';
import { movieApi } from '@/utils/api';

interface UseMoviesResult {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  hasMore: boolean;
  loadMore: () => void;
  refresh: () => void;
}

export const useMovies = (
  fetchFunction: (page: number) => Promise<ApiResponse<Movie>>,
  initialLoad: boolean = true
): UseMoviesResult => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const loadMovies = useCallback(async (page: number, append: boolean = false) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetchFunction(page);
      
      setMovies(prev => append ? [...prev, ...response.results] : response.results);
      setTotalPages(response.total_pages);
      setCurrentPage(page);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load movies');
    } finally {
      setLoading(false);
    }
  }, [fetchFunction]);

  const loadMore = useCallback(() => {
    if (currentPage < totalPages && !loading) {
      loadMovies(currentPage + 1, true);
    }
  }, [currentPage, totalPages, loading, loadMovies]);

  const refresh = useCallback(() => {
    setMovies([]);
    setCurrentPage(1);
    loadMovies(1, false);
  }, [loadMovies]);

  useEffect(() => {
    if (initialLoad) {
      loadMovies(1, false);
    }
  }, [loadMovies, initialLoad]);

  return {
    movies,
    loading,
    error,
    hasMore: currentPage < totalPages,
    loadMore,
    refresh,
  };
};

export const useTrendingMovies = (): Omit<UseMoviesResult, 'loadMore' | 'hasMore'> => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadTrendingMovies = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      
      const trendingMovies = await movieApi.getTrendingMovies();
      setMovies(trendingMovies);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load trending movies');
    } finally {
      setLoading(false);
    }
  }, []);

  const refresh = useCallback(() => {
    loadTrendingMovies();
  }, [loadTrendingMovies]);

  useEffect(() => {
    loadTrendingMovies();
  }, [loadTrendingMovies]);

  return {
    movies,
    loading,
    error,
    refresh,
  };
};