import styled from 'styled-components';

export const ScrollButton = styled.button<{ $isVisible: boolean }>`
  position: fixed;
  bottom: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  z-index: 1000;
  transition: all ${({ theme }) => theme.transitions.normal};
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  transform: ${({ $isVisible }) => ($isVisible ? 'translateY(0)' : 'translateY(20px)')};
  box-shadow: ${({ theme }) => theme.shadows.lg};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary}dd;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(229, 9, 20, 0.3);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    bottom: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    width: 45px;
    height: 45px;
    font-size: 1.25rem;
  }
`;