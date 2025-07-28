import React, { useState, useEffect } from 'react';
import { ScrollButton } from './styles';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton 
      $isVisible={isVisible} 
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      ↑
    </ScrollButton>
  );
};

export default ScrollToTop;