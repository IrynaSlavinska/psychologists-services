import { useState } from 'react';
import icons from 'assets/icons/psy-icons.svg';
import {
  ReviewsList,
  ReviewerDataContainer,
  ReviewerLetter,
  ReviewerName,
  ReviewerRating,
  ReviewerComment,
  AppointmentButton,
} from './ReadMoreContent.styled';
import { AppointmentModal } from 'components/Modals';

export const ReadMoreContent = ({ reviews, avatar, name }) => {
  const [isAppointOpen, setAppointOpen] = useState(false);
  return (
    <>
      <ReviewsList>
        {reviews.map(({ reviewer, rating, comment }) => (
          <li key={reviewer}>
            <ReviewerDataContainer>
              <ReviewerLetter>{reviewer.slice(0, 1)}</ReviewerLetter>
              <div>
                <ReviewerName>{reviewer}</ReviewerName>
                <ReviewerRating>
                  <svg width="20" height="20">
                    <use href={`${icons}#icon-star`}></use>
                  </svg>
                  {rating}
                </ReviewerRating>
              </div>
            </ReviewerDataContainer>
            <ReviewerComment>{comment}</ReviewerComment>
          </li>
        ))}
      </ReviewsList>
      <AppointmentButton type="button" onClick={() => setAppointOpen(true)}>
        Make an appointment
      </AppointmentButton>

      <AppointmentModal
        isOpen={isAppointOpen}
        onClose={() => {
          setAppointOpen(false);
        }}
        avatar={avatar}
        name={name}
      />
    </>
  );
};
