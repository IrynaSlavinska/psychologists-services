import Select from 'react-select';
import './filterStyles.css';

export const Filter = () => {
  const filterOptions = [
    { value: 'A to Z', label: 'A to Z' },
    { value: 'Z to A', label: 'Z to A' },
    { value: 'Less than 10$', label: 'Less than 10$' },
    { value: 'Greater than 10$', label: 'Greater than 10$' },
    { value: 'Popular', label: 'Popular' },
    { value: 'Not popular', label: 'Not popular' },
    { value: 'Show all', label: 'Show all' },
  ];

  return (
    <Select
      defaultValue={filterOptions[0]}
      name="filter"
      options={filterOptions}
      classNamePrefix="custom-select"
    />
  );
};
