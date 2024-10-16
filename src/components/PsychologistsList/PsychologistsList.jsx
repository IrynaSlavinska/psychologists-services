import psychologists from 'data/psychologists.json';
import { PsychologistsItem } from 'components/PsychologistsItem';
import { PsyList } from './PsychologistsList.styled';

export const PsychologistsList = () => {
  return (
    <PsyList>
      {psychologists.map(psychologist => {
        return <PsychologistsItem psychologist={psychologist} />;
      })}
    </PsyList>
  );
};
