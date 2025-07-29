import styled from 'styled-components';

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
  padding: ${({ theme }) => theme.spacing.md};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: ${({ theme }) => theme.spacing.lg};
    padding: ${({ theme }) => theme.spacing.sm};
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.large}) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: ${({ theme }) => theme.spacing.xxl};
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xxl};
  color: ${({ theme }) => theme.colors.text.secondary};
  font-size: 1.1rem;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.surface}40, ${({ theme }) => theme.colors.background}40);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  border: 2px dashed ${({ theme }) => theme.colors.text.muted}40;
  margin: ${({ theme }) => theme.spacing.xl} 0;

  .icon {
    font-size: 3rem;
    margin-bottom: ${({ theme }) => theme.spacing.md};
    opacity: 0.5;
  }

  .message {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  .submessage {
    font-size: 1rem;
    opacity: 0.7;
  }
`;

export const LoadMoreButton = styled.button`
  display: block;
  margin: ${({ theme }) => theme.spacing.xxl} auto;
  padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xxl};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.primary}dd);
  color: ${({ theme }) => theme.colors.text.primary};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  box-shadow: 0 8px 25px rgba(229, 9, 20, 0.3);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: left 0.5s;
  }

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}dd, ${({ theme }) => theme.colors.primary});
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 12px 35px rgba(229, 9, 20, 0.4);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(-1px) scale(0.98);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;