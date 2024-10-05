import icons from 'assets/icons/psy-icons.svg';

const ReadMoreContent = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ reviewer, rating, comment }) => {
        return (
          <li>
            <div>
              <span>{reviewer.slice(0, 1)}</span>
              <div>
                <p>{reviewer}</p>
                <p>
                  <svg width="20" height="20">
                    <use href={`${icons}#icon-star`}></use>
                  </svg>
                  {rating}
                </p>
              </div>
            </div>
            <p>{comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ReadMoreContent;
