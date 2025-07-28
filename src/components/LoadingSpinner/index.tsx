import React from 'react';
import { SpinnerContainer, Spinner, LoadingText, DotsLoader } from './styles';

interface LoadingSpinnerProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  variant?: 'spinner' | 'dots';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'medium', 
  text = 'Loading...',
  variant = 'spinner'
}) => {
  return (
    <SpinnerContainer>
      {variant === 'spinner' ? (
        <Spinner $size={size} />
      ) : (
        <DotsLoader>
          <span />
          <span />
          <span />
        </DotsLoader>
      )}
      {text && <LoadingText>{text}</LoadingText>}
    </SpinnerContainer>
  );
};

export default LoadingSpinner;