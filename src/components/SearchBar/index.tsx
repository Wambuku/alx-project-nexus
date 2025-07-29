import React, { useState, useCallback } from 'react';
import { movieApi } from '@/utils/api';
import { useMovies } from '@/hooks/useMovies';
import MovieGrid from '@/components/MovieGrid';
import {
  SearchContainer,
  SearchInput,
  SearchButton,
  SearchResults,
  SearchTitle,
  ClearButton,
} from './styles';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const searchMovies = useCallback(
    (page: number) => movieApi.searchMovies(searchQuery, page),
    [searchQuery]
  );

  const {
    movies: searchResults,
    loading,
    error,
    hasMore,
    loadMore,
    refresh,
  } = useMovies(searchMovies, false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchQuery(query.trim());
      refresh();
    }
  };

  const handleClear = () => {
    setQuery('');
    setSearchQuery('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <SearchContainer>
      <form onSubmit={handleSearch}>
        <SearchInput
          type="text"
          placeholder="Search for movies..."
          value={query}
          onChange={handleInputChange}
        />
        <SearchButton type="submit" disabled={!query.trim() || loading}>
          {loading ? 'Searching...' : 'Search'}
        </SearchButton>
        {searchQuery && (
          <ClearButton type="button" onClick={handleClear}>
            Clear
          </ClearButton>
        )}
      </form>

      {searchQuery && (
        <SearchResults>
          <SearchTitle>
            Search results for &ldquo;{searchQuery}&rdquo;
            {searchResults.length > 0 && ` (${searchResults.length} found)`}
          </SearchTitle>
          <MovieGrid
            movies={searchResults}
            loading={loading}
            error={error}
            hasMore={hasMore}
            onLoadMore={loadMore}
          />
        </SearchResults>
      )}
    </SearchContainer>
  );
};

export default SearchBar;