import { Outlet } from 'react-router-dom';
import { Suspense, useState } from 'react';
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
import { LoginModal, RegistrationModal } from 'components/Modals';

export const Layout = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);

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
            <LogButton type="button" onClick={() => setLoginOpen(true)}>
              Log In
            </LogButton>
          </li>
          <li>
            <RegButton type="button" onClick={() => setRegisterOpen(true)}>
              Registration
            </RegButton>
          </li>
        </ButtonsList>
      </Header>

      <LoginModal isOpen={isLoginOpen} onClose={() => setLoginOpen(false)} />
      <RegistrationModal
        isOpen={isRegisterOpen}
        onClose={() => setRegisterOpen(false)}
      />

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
