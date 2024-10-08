import icons from 'assets/icons/psy-icons.svg';
import ReadMoreContent from 'components/ReadMoreContent/ReadMoreContent';
import {
  PsyItem,
  PsyPhotoContainer,
  PsyTopHeadCard,
  PsySpec,
  PsyName,
  TopInfoContainer,
  TopRating,
  TopPrice,
  ListInfo,
  PsyAboutText,
  ReadMoreButton,
} from './PsychologistsItem.styled';
import { useState } from 'react';

const PsychologistsItem = ({ psychologist }) => {
  const [showReadMore, setShowReadMore] = useState(false);

  const handleClick = () => {
    setShowReadMore(true);
  };

  return (
    <PsyItem key={psychologist.name}>
      <PsyPhotoContainer>
        <img
          src={psychologist.avatar_url}
          alt={psychologist.name}
          width={96}
          height={96}
        />
      </PsyPhotoContainer>
      <div>
        <PsyTopHeadCard>
          <div>
            <PsySpec>Psychologist</PsySpec>
            <PsyName>{psychologist.name}</PsyName>
          </div>
          <TopInfoContainer>
            <TopRating>
              <svg width="20" height="20">
                <use href={`${icons}#icon-star`}></use>
              </svg>
              Rating: {psychologist.rating}
            </TopRating>
            <TopPrice>
              Price / 1 hour: <span>{psychologist.price_per_hour}$</span>
            </TopPrice>
            <button type="button">
              <svg width="15" height="20">
                <use href={`${icons}#icon-heart`}></use>
              </svg>
            </button>
          </TopInfoContainer>
        </PsyTopHeadCard>
        <ListInfo>
          <li>
            <p>
              Experience: <span>{psychologist.experience}</span>
            </p>
          </li>
          <li>
            <p>
              License: <span>{psychologist.license}</span>
            </p>
          </li>
          <li>
            <p>
              Specialization: <span>{psychologist.specialization}</span>
            </p>
          </li>
          <li>
            <p>
              Initial consultation:{' '}
              <span>{psychologist.initial_consultation}</span>
            </p>
          </li>
        </ListInfo>
        <PsyAboutText>{psychologist.about}</PsyAboutText>

        {!showReadMore && (
          <ReadMoreButton type="button" onClick={handleClick}>
            Read more
          </ReadMoreButton>
        )}

        {showReadMore && <ReadMoreContent reviews={psychologist.reviews} />}
      </div>
    </PsyItem>
  );
};

export default PsychologistsItem;
