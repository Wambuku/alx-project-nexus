import styled, { keyframes } from 'styled-components';

const slideInRight = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOutRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const ToastContainer = styled.div<{ 
  $type: 'success' | 'error' | 'info';
  $isVisible: boolean;
}>`
  position: fixed;
  top: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  box-shadow: ${({ theme }) => theme.shadows.lg};
  z-index: 1000;
  min-width: 300px;
  animation: ${({ $isVisible }) => $isVisible ? slideInRight : slideOutRight} 0.3s ease-out;
  
  background-color: ${({ theme, $type }) => {
    switch ($type) {
      case 'success': return theme.colors.accent;
      case 'error': return theme.colors.error;
      case 'info': return theme.colors.primary;
      default: return theme.colors.surface;
    }
  }};
  
  color: ${({ theme }) => theme.colors.text.primary};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    top: ${({ theme }) => theme.spacing.lg};
    right: ${({ theme }) => theme.spacing.lg};
    left: ${({ theme }) => theme.spacing.lg};
    min-width: auto;
  }
`;

export const ToastIcon = styled.span`
  font-size: 1.25rem;
  font-weight: bold;
`;

export const ToastMessage = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
`;