import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { LayoutContainer, MainContent } from './styles';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContent>{children}</MainContent>
      <Footer />
      <ScrollToTop />
    </LayoutContainer>
  );
};

export default Layout;