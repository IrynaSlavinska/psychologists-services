import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 48px;
  margin-bottom: 40px;
`;

export const ReviewerDataContainer = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
  align-items: center;
`;

export const ReviewerLetter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-color: var(--light-accent);
  color: var(--accent-color);
`;

export const ReviewerName = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const ReviewerRating = styled.p`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  svg {
    fill: var(--yellow-color);
  }
`;

export const ReviewerComment = styled.p`
  font-size: 16px;
  line-height: 1.5;
  color: #191a1580;
`;

export const AppointmentButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: var(--white-color);
  padding: 14px 32px;
  border-radius: 30px;
  background: var(--accent-color);
  transition: background var(--easedTransition);

  &:hover,
  &:focus {
    background: var(--hover-color);
  }
`;
