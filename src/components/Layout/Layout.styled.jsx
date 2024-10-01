import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  max-width: 1184px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #191a151a;
`;

export const NavList = styled.ul`
  margin-left: 130px;
  display: flex;
  gap: 40px;
`;

export const NavItem = styled.li``;

export const StyledNav = styled(NavLink)`
  line-height: 1.25;
  letter-spacing: -0.01em;

  span {
    color: #fc832c;
  }
`;

export const Main = styled.main``;

export const Container = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: 16px;
`;
