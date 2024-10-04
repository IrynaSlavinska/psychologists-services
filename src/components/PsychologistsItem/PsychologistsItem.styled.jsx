import styled from '@emotion/styled';

export const PsyItem = styled.li`
  display: flex;
  gap: 24px;
  background-color: var(--white-color);
  padding: 24px;
  border-radius: 24px;
`;

export const PsyPhotoContainer = styled.div`
  padding: 12px;
  border: 2px solid var(--light-accent);
  border-radius: 30px;
  width: 120px;
  height: 120px;
  flex-shrink: 0;

  img {
    border-radius: 15px;
  }
`;

export const PsySpec = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  color: #8a8a89;
  margin-bottom: 8px;
`;

export const PsyName = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1;
`;

export const PsyTopHeadCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const TopInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;
export const TopRating = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 4px;

  svg {
    fill: var(--yellow-color);
  }
`;

export const TopPrice = styled.p`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;

  span {
    color: var(--green-color);
  }
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 4px;
  margin-bottom: 24px;
  width: 800px;

  li {
    background-color: var(--body-color);
    padding: 8px 16px;
    border-radius: 24px;

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: 1.5;
      color: #8a8a89;

      span {
        color: var(--text-color);
      }
    }
  }
`;

export const PsyAboutText = styled.p`
  font-size: 16px;
  line-height: 20px;
  color: #191a1580;
  margin-bottom: 14px;
`;

export const ReadMoreButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: underline;
`;
