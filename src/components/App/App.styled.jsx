import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  width: 100%;
  padding: 24px 128px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 5;
  border-bottom: 1px solid #191a151a;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1408px;
  }
`;

export const Navigation = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;

  @media screen and (min-width: 375px) {
    gap: 20px;
  }

  @media screen and (min-width: 768px) {
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const NavItem = styled.li`
  font-size: 20px;
  color: #2c2c2c;
`;

export const StyledNav = styled(NavLink)`
  font-size: 16px;
  line-height: 1.25;
  letter-spacing: -0.16px;

  &.active {
    position: relative;
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent-color);
      left: 50%;
      transform: translateX(-50%);
      bottom: -12px;
    }
  }
`;

export const Main = styled.main`
  padding-top: 50px;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 16px 20px 16px;
  margin: 0 auto;

  @media screen and (min-width: 375px) {
    max-width: 375px;
  }

  @media screen and (min-width: 768px) {
    max-width: 736px;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1400px;
    padding: 32px 20px;
  }
`;
