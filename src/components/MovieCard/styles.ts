import styled, { keyframes, css } from 'styled-components';
import Image from 'next/image';

const cardHover = keyframes`
  0% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-2px) scale(1.02); }
  100% { transform: translateY(-4px) scale(1.02); }
`;

const heartBeat = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

export const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.surface};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadows.sm};
  position: relative;

  &:hover {
    animation: ${cardHover} 0.3s ease-out forwards;
    box-shadow: ${({ theme }) => theme.shadows.lg};
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
`;

export const MovieImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: ${({ theme }) => theme.transitions.normal};

  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.sm};
  right: ${({ theme }) => theme.spacing.sm};
  background-color: rgba(0, 0, 0, 0.7);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${({ theme }) => theme.transitions.fast};
  opacity: 0;

  ${CardContainer}:hover & {
    opacity: 1;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.9);
    transform: scale(1.1);
  }
`;

export const HeartIcon = styled.span<{ $isFavorite: boolean }>`
  color: ${({ theme, $isFavorite }) => 
    $isFavorite ? theme.colors.primary : theme.colors.text.secondary};
  font-size: 1.2rem;
  transition: ${({ theme }) => theme.transitions.fast};

  ${({ $isFavorite }) => $isFavorite && css`
    animation: ${heartBeat} 0.6s ease-in-out;
  `}
`;

export const MovieInfo = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
`;

export const MovieTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const MovieYear = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const Rating = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.warning};
  font-weight: 500;
`;