import psychologists from 'data/psychologists.json';
import PsychologistsItem from 'components/PsychologistsItem/PsychologistsItem';
import { PsyList } from './PsychologistsList.styled';

const PsychologistsList = () => {
  return (
    <PsyList>
      {psychologists.map(psychologist => {
        return <PsychologistsItem psychologist={psychologist} />;
      })}
    </PsyList>
  );
};

export default PsychologistsList;
