import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  padding-top: 78px;
  display: flex;
  gap: 125px;
  justify-content: center;
  align-items: center;

  background: linear-gradient(to bottom right, #fbfbfb, #fc832c33);
`;

export const Title = styled.h1`
  width: 595px;
  color: #191a15;
  font-size: 80px;
  font-weight: 600;
  line-height: 1.03;
  letter-spacing: -1.6px;
  margin-bottom: 20px;

  & span {
    color: #fc832c;
  }
`;

export const Text = styled.p`
  color: #191a15;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.33;
  letter-spacing: -0.36px;
  max-width: 510px;
  margin-bottom: 40px;
`;

export const StartedButton = styled.button`
  color: #fbfbfb;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.2px;
  display: flex;
  padding: 18px 50px;
  justify-content: center;
  align-items: center;
  gap: 18px;
  border-radius: 30px;
  background: #fc832c;
`;
