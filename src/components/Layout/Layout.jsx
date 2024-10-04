import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import {
  Header,
  LogoText,
  NavList,
  NavItem,
  StyledNav,
  Main,
  Container,
} from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <LogoText>
          <span>psychologists.</span>
          services
        </LogoText>
        <NavList>
          <NavItem>
            <StyledNav to="/">Home</StyledNav>
          </NavItem>
          <NavItem>
            <StyledNav to="/psychologists">Psychologists</StyledNav>
          </NavItem>
          <NavItem>
            <StyledNav to="/favorites">Favorites</StyledNav>
          </NavItem>
        </NavList>
        <NavList>
          <li>
            <button type="button">Log In</button>
          </li>
          <li>
            <button type="button">Registration</button>
          </li>
        </NavList>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={null}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default Layout;
