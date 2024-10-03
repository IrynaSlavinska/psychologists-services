import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 125px;
  min-height: calc(100vh - 96px);
`;

export const HomeTitle = styled.h1`
  font-family: Inter;
  font-size: 80px;
  font-weight: 600;
  line-height: 1.03;
  letter-spacing: -0.02em;
  width: 595px;
  margin-bottom: 20px;

  span {
    color: var(--accent-color);
  }
`;

export const HomeText = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.02em;
  width: 450px;
`;
