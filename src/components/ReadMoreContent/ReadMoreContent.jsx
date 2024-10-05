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

const ReadMoreContent = ({ reviews }) => {
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
      <AppointmentButton type="button">Make an appointment</AppointmentButton>
    </>
  );
};

export default ReadMoreContent;
