import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import {
  Container,
  Header,
  Navigation,
  NavItem,
  StyledNav,
  Main,
} from './App.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavItem>
            <StyledNav to="/">Home</StyledNav>
          </NavItem>
          <NavItem>
            <StyledNav to="/psychologists">Psychologists</StyledNav>
          </NavItem>
          <NavItem>
            <StyledNav to="/favorites">Favorites</StyledNav>
          </NavItem>
        </Navigation>
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
