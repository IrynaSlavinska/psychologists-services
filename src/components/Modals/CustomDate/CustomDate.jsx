import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { Input } from '../ModalWrapper.styled';
import 'react-datepicker/dist/react-datepicker.css';

export const CustomDate = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <DatePicker
      dateFormat="dd/MM/yyyy"
      selected={startDate}
      onChange={date => setStartDate(date)}
      customInput=<Input />
    />
  );
};
