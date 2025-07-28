import React from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Movie } from '@/types/movie';
import { getImageUrl } from '@/utils/api';
import { favoritesStorage } from '@/utils/localStorage';
import { useToastContext } from '@/components/ToastProvider';
import {
  CardContainer,
  ImageContainer,
  MovieImage,
  MovieInfo,
  MovieTitle,
  MovieYear,
  Rating,
  FavoriteButton,
  HeartIcon,
} from './styles';

interface MovieCardProps {
  movie: Movie;
  onFavoriteToggle?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, onFavoriteToggle }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isClient, setIsClient] = React.useState(false);
  const router = useRouter();
  const toast = useToastContext();

  React.useEffect(() => {
    setIsClient(true);
    setIsFavorite(favoritesStorage.isFavorite(movie.id));
  }, [movie.id]);

  const handleCardClick = () => {
    router.push(`/movie/${movie.id}`);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (isFavorite) {
      favoritesStorage.removeFavorite(movie.id);
      toast.info(`Removed "${movie.title}" from favorites`);
    } else {
      favoritesStorage.addFavorite(movie);
      toast.success(`Added "${movie.title}" to favorites`);
    }
    
    setIsFavorite(!isFavorite);
    onFavoriteToggle?.();
  };

  const releaseYear = movie.release_date ? new Date(movie.release_date).getFullYear() : 'TBA';
  const posterUrl = movie.poster_path ? getImageUrl(movie.poster_path, 'w500') : '/placeholder-movie.svg';

  return (
    <CardContainer onClick={handleCardClick}>
      <ImageContainer>
        <MovieImage
          src={posterUrl}
          alt={movie.title}
          width={300}
          height={450}
          priority={false}
        />
        {isClient && (
          <FavoriteButton onClick={handleFavoriteClick} $isFavorite={isFavorite}>
            <HeartIcon $isFavorite={isFavorite}>♥</HeartIcon>
          </FavoriteButton>
        )}
      </ImageContainer>
      
      <MovieInfo>
        <MovieTitle>{movie.title}</MovieTitle>
        <MovieYear>{releaseYear}</MovieYear>
        <Rating>⭐ {movie.vote_average.toFixed(1)}</Rating>
      </MovieInfo>
    </CardContainer>
  );
};

export default MovieCard;