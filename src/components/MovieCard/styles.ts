import styled, { keyframes, css } from 'styled-components';
import Image from 'next/image';

const cardHover = keyframes`
  0% { 
    transform: translateY(0) scale(1); 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  100% { 
    transform: translateY(-8px) scale(1.03); 
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }
`;

const heartBeat = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

const shimmer = keyframes`
  0% { background-position: -200px 0; }
  100% { background-position: calc(200px + 100%) 0; }
`;

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ratingPulse = keyframes`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
`;

export const CardContainer = styled.div`
  background: linear-gradient(145deg, ${({ theme }) => theme.colors.surface}, ${({ theme }) => theme.colors.background});
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.05);
  animation: ${fadeInUp} 0.6s ease-out;

  &:hover {
    animation: ${cardHover} 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
    border-color: ${({ theme }) => theme.colors.primary}40;
  }

  &:active {
    transform: translateY(-6px) scale(0.98);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: 1;
  }

  &:hover::before {
    opacity: 1;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 2/3;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.surface} 0%,
    ${({ theme }) => theme.colors.background} 50%,
    ${({ theme }) => theme.colors.surface} 100%
  );
  background-size: 200px 100%;
  animation: ${shimmer} 1.5s ease-in-out infinite;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.4) 50%,
      transparent 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
  }

  ${CardContainer}:hover &::after {
    opacity: 1;
  }
`;

export const MovieImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: brightness(0.9) contrast(1.1);

  ${CardContainer}:hover & {
    transform: scale(1.08);
    filter: brightness(1) contrast(1.2);
  }

  &[src*="placeholder"] {
    filter: grayscale(0.3) brightness(0.7);
  }
`;

export const FavoriteButton = styled.button<{ $isFavorite: boolean }>`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  right: ${({ theme }) => theme.spacing.md};
  background: ${({ theme, $isFavorite }) => 
    $isFavorite 
      ? `linear-gradient(135deg, ${theme.colors.primary}, ${theme.colors.primary}dd)`
      : 'rgba(0, 0, 0, 0.8)'
  };
  border: 2px solid ${({ theme, $isFavorite }) => 
    $isFavorite ? theme.colors.primary : 'rgba(255, 255, 255, 0.2)'};
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  opacity: 0;
  transform: scale(0.8);
  backdrop-filter: blur(10px);
  z-index: 2;

  ${CardContainer}:hover & {
    opacity: 1;
    transform: scale(1);
  }

  &:hover {
    background: ${({ theme, $isFavorite }) => 
      $isFavorite 
        ? `linear-gradient(135deg, ${theme.colors.primary}dd, ${theme.colors.primary})`
        : 'rgba(0, 0, 0, 0.95)'
    };
    transform: scale(1.15);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 8px 25px rgba(229, 9, 20, 0.4);
  }

  &:active {
    transform: scale(0.95);
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
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
  background: linear-gradient(
    to bottom,
    transparent 0%,
    rgba(0, 0, 0, 0.05) 100%
  );
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent,
      ${({ theme }) => theme.colors.primary}40,
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  ${CardContainer}:hover &::before {
    opacity: 1;
  }
`;

export const MovieTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: color 0.3s ease;

  ${CardContainer}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MovieMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const MovieYear = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.text.muted};
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  padding: 2px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.warning};
  font-weight: 600;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.warning}20, ${({ theme }) => theme.colors.warning}10);
  padding: 4px 8px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.warning}30;
  transition: all 0.3s ease;

  &:hover {
    animation: ${ratingPulse} 0.6s ease-in-out;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.warning}30, ${({ theme }) => theme.colors.warning}20);
  }

  .star {
    font-size: 1rem;
    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
  }
`;