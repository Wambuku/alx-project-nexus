import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const TransitionContainer = styled.div`
  width: 100%;
`;

export const FadeIn = styled.div<{ $delay: number }>`
  animation: ${fadeInUp} 0.6s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay}ms;
  opacity: 0;
`;

export const SlideIn = styled.div<{ $delay: number }>`
  animation: ${slideInFromLeft} 0.5s ease-out forwards;
  animation-delay: ${({ $delay }) => $delay}ms;
  opacity: 0;
`;