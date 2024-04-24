import psychologist1x from 'assets/images/psychologist-1x.jpg';
import psychologist2x from 'assets/images/psychologist-2x.jpg';

import {
  HomeContainer,
  Title,
  Text,
  StartedButton,
} from './HomeContent.styled';

const HomeContent = () => {
  return (
    <HomeContainer>
      <div>
        <Title>
          The road to the <span>depths</span> of the human soul
        </Title>
        <Text>
          We help you to reveal your potential, overcome challenges and find a
          guide in your own life with the help of our experienced psychologists.
        </Text>
        <StartedButton type="button">Get started</StartedButton>
      </div>
      <div>
        <img
          src={psychologist1x}
          alt="psychologist"
          srcSet={`${psychologist1x} 1x, ${psychologist2x} 2x`}
          width={464}
          height={526}
        />
        <div>
          <span>check icon</span>
          <p>Experienced psychologists</p>
          <p>15,000</p>
        </div>
      </div>
    </HomeContainer>
  );
};

export default HomeContent;
