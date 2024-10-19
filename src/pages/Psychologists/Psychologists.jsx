import { PsychologistsList } from 'components/PsychologistsList';
import { Filter } from 'components/Filter';

export const PsychologistsPage = () => {
  return (
    <>
      <Filter />
      <PsychologistsList />;
    </>
  );
};
