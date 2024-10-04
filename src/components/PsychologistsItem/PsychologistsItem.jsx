const PsychologistsItem = ({ psychologist }) => {
  return (
    <li key={psychologist.name}>
      <img
        src={psychologist.avatar_url}
        alt={psychologist.name}
        width={96}
        height={96}
      />
      <p>Psychologist</p>
      <p>{psychologist.name}</p>
      <div>
        <p>Rating: {psychologist.rating}</p>
        <p>
          Price / 1 hour:{' '}
          <span style={{ color: 'green' }}>{psychologist.price_per_hour}$</span>
        </p>
      </div>
      <ul>
        <li>
          <p>Experience: {psychologist.experience}</p>
        </li>
        <li>
          <p>License: {psychologist.license}</p>
        </li>
        <li>
          <p>Specialization: {psychologist.specialization}</p>
        </li>
        <li>
          <p>Initial consultation: {psychologist.initial_consultation}</p>
        </li>
      </ul>
      <p>{psychologist.about}</p>
      <button type="button">Read more</button>
    </li>
  );
};

export default PsychologistsItem;
