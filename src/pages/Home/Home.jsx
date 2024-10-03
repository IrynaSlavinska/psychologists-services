import ImageHomeNormScreen from 'assets/images/psy-home-1x.jpg';
import ImageHomeRetinaScreen from 'assets/images/psy-home-2x.jpg';
import icons from 'assets/icons/psy-icons.svg';

import { HomeContainer, HomeTitle, HomeText } from './Home.styled';

const HomePage = () => {
  return (
    <HomeContainer>
      <div>
        <HomeTitle>
          The road to the <span>depths</span> of the human soul
        </HomeTitle>
        <HomeText>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </HomeText>
      </div>
      <div>
        <img
          srcSet={`${ImageHomeNormScreen} 1x, ${ImageHomeRetinaScreen} 2x`}
          src={ImageHomeNormScreen}
          alt="Girl in glasses"
          width={464}
          height={526}
        />
        <div>
          <svg width="20" height="15">
            <use href={`${icons}#icon-check`}></use>
          </svg>
          <p>Experienced psychologists</p>
          <p>15,000</p>
        </div>
        <svg width="20" height="20">
          <use href={`${icons}#icon-duo`}></use>
        </svg>
        <svg width="15" height="20">
          <use href={`${icons}#icon-question`}></use>
        </svg>
      </div>
    </HomeContainer>
  );
};

export default HomePage;
