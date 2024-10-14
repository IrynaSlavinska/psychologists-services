import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  max-width: 1184px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #191a151a;
`;
export const LogoText = styled.p`
  font-weight: 700;
  font-size: 20px;

  span {
    color: var(--accent-color);
  }
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
  position: relative;

  span {
    color: #fc832c;
  }

  &.active:after {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background: var(--accent-color);
    border-radius: 50%;
    left: 50%;
    bottom: -8px;
    transform: translateX(-50%);
  }
`;

export const Main = styled.main``;

export const Container = styled.div`
  max-width: 1184px;
  margin: 0 auto;
  padding: 16px;
`;

export const ButtonsList = styled.ul`
  display: flex;
  gap: 8px;
`;

export const LogButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  padding: 14px 39px;
  border-radius: 30px;
  border: 1px solid #191a1533;
  transition: background-color var(--easedTransition),
    border-color var(--easedTransition), color var(--easedTransition);

  &:hover {
    background-color: var(--hover-color);
    border-color: transparent;
    color: var(--white-color);
  }
`;

export const RegButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.25;
  letter-spacing: -0.01em;
  padding: 14px 39px;
  border-radius: 30px;
  color: var(--white-color);
  background-color: var(--accent-color);
  transition: background-color var(--easedTransition);

  &:hover {
    background-color: var(--hover-color);
  }
`;
