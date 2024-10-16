import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageHomeNormScreen from 'assets/images/psy-home-1x.jpg';
import ImageHomeRetinaScreen from 'assets/images/psy-home-2x.jpg';
import icons from 'assets/icons/psy-icons.svg';
import {
  HomeContainer,
  HomeTitle,
  HomeText,
  ParentBlock,
  InfoContainer,
  CheckIcon,
  FirstString,
  SecondString,
  QuestionIcon,
  DuoPersIcon,
} from './Home.styled';

export const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      document.body.style.background =
        'linear-gradient(to right bottom, #fbfbfb 30%, #FC832C33 100%)';
    }
    return () => {
      document.body.style.background = '';
    };
  }, [location]);

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
      <ParentBlock>
        <img
          srcSet={`${ImageHomeNormScreen} 1x, ${ImageHomeRetinaScreen} 2x`}
          src={ImageHomeNormScreen}
          alt="Girl in glasses"
          width={464}
          height={526}
        />
        <InfoContainer>
          <CheckIcon width="20" height="15">
            <use href={`${icons}#icon-check`}></use>
          </CheckIcon>
          <div>
            <FirstString>Experienced psychologists</FirstString>
            <SecondString>15,000</SecondString>
          </div>
        </InfoContainer>
        <DuoPersIcon width="20" height="20">
          <use href={`${icons}#icon-duo`}></use>
        </DuoPersIcon>
        <QuestionIcon width="15" height="20">
          <use href={`${icons}#icon-question`}></use>
        </QuestionIcon>
      </ParentBlock>
    </HomeContainer>
  );
};
