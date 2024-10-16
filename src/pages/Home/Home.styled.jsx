import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 125px;
  min-height: calc(100vh - 132px);
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

export const ParentBlock = styled.div`
  position: relative;
`;

export const InfoContainer = styled.div`
  position: absolute;
  padding: 32px;
  border-radius: 20px;
  background-color: var(--accent-color);
  display: flex;
  gap: 16px;
  left: -100px;
  top: 333px;
`;

export const CheckIcon = styled.svg`
  width: 54px;
  height: 54px;
  background-color: var(--white-color);
  border-radius: 13px;
  padding: 19px 17px;
  fill: var(--accent-color);
`;

export const FirstString = styled.p`
  color: #fbfbfb80;
  margin-bottom: 8px;
`;

export const SecondString = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.21;
  color: var(--white-color);
`;

export const QuestionIcon = styled.svg`
  position: absolute;
  width: 40px;
  height: 40px;
  padding: 12px;
  top: 185px;
  left: -36px;
  border-radius: 10px;
  transform: rotate(-15deg);
  fill: var(--white-color);
  background: var(--green-color);
`;

export const DuoPersIcon = styled.svg`
  position: absolute;
  width: 48px;
  height: 48px;
  padding: 16px;
  top: 38px;
  right: -40px;
  border-radius: 10px;
  transform: rotate(15deg);
  fill: var(--white-color);
  background: var(--yellow-color);
`;
