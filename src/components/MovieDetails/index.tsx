import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { MovieDetails as MovieDetailsType, Movie } from '@/types/movie';
import { getImageUrl, movieApi } from '@/utils/api';
import { favoritesStorage } from '@/utils/localStorage';
import { useToastContext } from '@/components/ToastProvider';
import MovieGrid from '@/components/MovieGrid';
import LoadingSpinner from '@/components/LoadingSpinner';
import {
  DetailsContainer,
  HeroSection,
  BackdropContainer,
  BackdropImage,
  MovieContent,
  PosterContainer,
  PosterImage,
  MovieInfo,
  MovieTitle,
  MovieTagline,
  MovieMeta,
  MetaItem,
  MetaLabel,
  MetaValue,
  RatingContainer,
  RatingScore,
  RatingStars,
  GenreList,
  GenreTag,
  Overview,
  OverviewTitle,
  OverviewText,
  ActionButtons,
  FavoriteButton,
  BackButton,
  RecommendationsSection,
  SectionTitle,
} from './styles';

interface MovieDetailsProps {
  movie: MovieDetailsType;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const router = useRouter();
  const toast = useToastContext();
  const [isFavorite, setIsFavorite] = useState(false);
  const [recommendations, setRecommendations] = useState<Movie[]>([]);
  const [loadingRecommendations, setLoadingRecommendations] = useState(false);

  useEffect(() => {
    setIsFavorite(favoritesStorage.isFavorite(movie.id));
    loadRecommendations();
  }, [movie.id]);

  const loadRecommendations = async () => {
    try {
      setLoadingRecommendations(true);
      const recs = await movieApi.getRecommendations(movie.id.toString());
      setRecommendations(recs.slice(0, 12)); // Limit to 12 recommendations
    } catch (error) {
      console.error('Failed to load recommendations:', error);
    } finally {
      setLoadingRecommendations(false);
    }
  };

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      favoritesStorage.removeFavorite(movie.id);
      toast.info(`Removed "${movie.title}" from favorites`);
    } else {
      favoritesStorage.addFavorite(movie);
      toast.success(`Added "${movie.title}" to favorites`);
    }
    setIsFavorite(!isFavorite);
  };

  const handleBack = () => {
    router.back();
  };

  const formatRuntime = (minutes: number) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const backdropUrl = movie.backdrop_path 
    ? getImageUrl(movie.backdrop_path, 'w1280') 
    : '/placeholder-movie.svg';
  
  const posterUrl = movie.poster_path 
    ? getImageUrl(movie.poster_path, 'w500') 
    : '/placeholder-movie.svg';

  const releaseYear = movie.release_date 
    ? new Date(movie.release_date).getFullYear() 
    : 'TBA';

  return (
    <DetailsContainer>
      <HeroSection>
        <BackdropContainer>
          <BackdropImage
            src={backdropUrl}
            alt={movie.title}
            width={1280}
            height={400}
            priority
          />
        </BackdropContainer>
        
        <MovieContent>
          <PosterContainer>
            <PosterImage
              src={posterUrl}
              alt={movie.title}
              width={300}
              height={450}
              priority
            />
          </PosterContainer>
          
          <MovieInfo>
            <div>
              <MovieTitle>{movie.title}</MovieTitle>
              {movie.tagline && <MovieTagline>"{movie.tagline}"</MovieTagline>}
            </div>
            
            <MovieMeta>
              <MetaItem>
                <MetaLabel>Year</MetaLabel>
                <MetaValue>{releaseYear}</MetaValue>
              </MetaItem>
              
              {movie.runtime && (
                <MetaItem>
                  <MetaLabel>Runtime</MetaLabel>
                  <MetaValue>{formatRuntime(movie.runtime)}</MetaValue>
                </MetaItem>
              )}
              
              <MetaItem>
                <MetaLabel>Rating</MetaLabel>
                <RatingContainer>
                  <RatingScore $score={movie.vote_average}>
                    {movie.vote_average.toFixed(1)}
                  </RatingScore>
                  <RatingStars>⭐</RatingStars>
                  <MetaValue>({movie.vote_count.toLocaleString()} votes)</MetaValue>
                </RatingContainer>
              </MetaItem>
            </MovieMeta>
            
            {movie.genres && movie.genres.length > 0 && (
              <GenreList>
                {movie.genres.map((genre) => (
                  <GenreTag key={genre.id}>{genre.name}</GenreTag>
                ))}
              </GenreList>
            )}
            
            {movie.overview && (
              <Overview>
                <OverviewTitle>Overview</OverviewTitle>
                <OverviewText>{movie.overview}</OverviewText>
              </Overview>
            )}
            
            <ActionButtons>
              <FavoriteButton 
                onClick={handleFavoriteToggle} 
                $isFavorite={isFavorite}
              >
                <span>{isFavorite ? '❤️' : '🤍'}</span>
                {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
              </FavoriteButton>
              
              <BackButton onClick={handleBack}>
                <span>←</span>
                Back
              </BackButton>
            </ActionButtons>
          </MovieInfo>
        </MovieContent>
      </HeroSection>
      
      {recommendations.length > 0 && (
        <RecommendationsSection>
          <SectionTitle>You Might Also Like</SectionTitle>
          {loadingRecommendations ? (
            <LoadingSpinner />
          ) : (
            <MovieGrid movies={recommendations} />
          )}
        </RecommendationsSection>
      )}
    </DetailsContainer>
  );
};

export default MovieDetails;