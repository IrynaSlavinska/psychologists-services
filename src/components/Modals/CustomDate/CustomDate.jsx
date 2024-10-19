import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Input } from '../ModalWrapper.styled';
import 'react-datepicker/dist/react-datepicker.css';

export const CustomDate = () => {
  const [startDate, setStartDate] = useState(new Date());
  const minDate = new Date();

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      minDate={minDate}
      onChange={date => setStartDate(date)}
      customInput=<Input />
    />
  );
};
