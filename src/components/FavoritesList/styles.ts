import styled from 'styled-components';

export const FavoritesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const FavoritesTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 1.5rem;
    margin-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

export const EmptyFavorites = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.text.secondary};
  
  p {
    font-size: 1.1rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    
    &:last-child {
      color: ${({ theme }) => theme.colors.text.muted};
      font-size: 1rem;
    }
  }
`;