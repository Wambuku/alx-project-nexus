import React from 'react';
import { TransitionContainer, FadeIn } from './styles';

interface PageTransitionProps {
  children: React.ReactNode;
  delay?: number;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, delay = 0 }) => {
  return (
    <TransitionContainer>
      <FadeIn $delay={delay}>
        {children}
      </FadeIn>
    </TransitionContainer>
  );
};

export default PageTransition;