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
  ButtonsList,
  LogButton,
  RegButton,
} from './Layout.styled';

export const Layout = () => {
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
        <ButtonsList>
          <li>
            <LogButton type="button">Log In</LogButton>
          </li>
          <li>
            <RegButton type="button">Registration</RegButton>
          </li>
        </ButtonsList>
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
