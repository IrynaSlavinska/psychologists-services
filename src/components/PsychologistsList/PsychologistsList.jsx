import psychologists from 'data/psychologists.json';
import PsychologistsItem from 'components/PsychologistsItem/PsychologistsItem';

const PsychologistsList = () => {
  return (
    <ul>
      {psychologists.map(psychologist => {
        return <PsychologistsItem psychologist={psychologist} />;
      })}
    </ul>
  );
};

export default PsychologistsList;
