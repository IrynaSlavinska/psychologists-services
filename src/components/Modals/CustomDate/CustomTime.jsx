import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '../ModalWrapper.styled';
import css from './styles.css';

export const CustomTime = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      selected={startDate}
      onChange={date => setStartDate(date)}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={30}
      timeFormat="HH:mm"
      dateFormat="HH:mm"
      showTimeCaption={false}
      customInput=<Input />
    />
  );
};
