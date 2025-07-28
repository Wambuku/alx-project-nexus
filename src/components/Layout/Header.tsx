import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { HeaderContainer, Logo, Nav, NavLink } from './styles';

const Header: React.FC = () => {
  const router = useRouter();

  return (
    <HeaderContainer>
      <Link href="/">
        <Logo>ALX Movie Nexus</Logo>
      </Link>
      
      <Nav>
        <Link href="/">
          <NavLink as="span" $active={router.pathname === '/'}>
            Home
          </NavLink>
        </Link>
        <Link href="/favorites">
          <NavLink as="span" $active={router.pathname === '/favorites'}>
            Favorites
          </NavLink>
        </Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;