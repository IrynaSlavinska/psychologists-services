import icons from 'assets/icons/psy-icons.svg';
import { ReadMoreContent } from 'components/ReadMoreContent';
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

export const PsychologistsItem = ({ psychologist }) => {
  const [showReadMore, setShowReadMore] = useState(false);
  const {
    name,
    avatar_url,
    rating,
    price_per_hour,
    experience,
    license,
    specialization,
    initial_consultation,
    about,
    reviews,
  } = psychologist;

  const handleClick = () => {
    setShowReadMore(true);
  };

  return (
    <PsyItem key={name}>
      <PsyPhotoContainer>
        <img src={avatar_url} alt={name} width={96} height={96} />
      </PsyPhotoContainer>
      <div>
        <PsyTopHeadCard>
          <div>
            <PsySpec>Psychologist</PsySpec>
            <PsyName>{name}</PsyName>
          </div>
          <TopInfoContainer>
            <TopRating>
              <svg width="20" height="20">
                <use href={`${icons}#icon-star`}></use>
              </svg>
              Rating: {rating}
            </TopRating>
            <TopPrice>
              Price / 1 hour: <span>{price_per_hour}$</span>
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
              Experience: <span>{experience}</span>
            </p>
          </li>
          <li>
            <p>
              License: <span>{license}</span>
            </p>
          </li>
          <li>
            <p>
              Specialization: <span>{specialization}</span>
            </p>
          </li>
          <li>
            <p>
              Initial consultation: <span>{initial_consultation}</span>
            </p>
          </li>
        </ListInfo>
        <PsyAboutText>{about}</PsyAboutText>

        {!showReadMore && (
          <ReadMoreButton type="button" onClick={handleClick}>
            Read more
          </ReadMoreButton>
        )}

        {showReadMore && (
          <ReadMoreContent reviews={reviews} avatar={avatar_url} name={name} />
        )}
      </div>
    </PsyItem>
  );
};
