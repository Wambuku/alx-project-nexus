import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const TransitionContainer = styled.div`
  width: 100%;
`;

export const FadeIn = styled.div<{ $delay?: number }>`
  animation: ${fadeIn} 0.6s ease-out forwards;
  animation-delay: ${({ $delay = 0 }) => $delay}ms;
  opacity: 0;
`;