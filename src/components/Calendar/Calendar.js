import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
import { getFirstDayOfLastMonth, getFirstDayOfMonth, getFirstDayOfNextMonth } from './utils';

function Calendar({ checkedDate, onAddDateChecked }) {
  const [firstDayOfMonth, setFirstDayOfMonth] = useState(getFirstDayOfMonth(new Date()));

  const onLastMonthClick = () => {
    const firstDayOfLastMonth = getFirstDayOfLastMonth(firstDayOfMonth);
    setFirstDayOfMonth(firstDayOfLastMonth);
  };

  const onNextMonthClick = () => {
    const firstDayOfNextMonth = getFirstDayOfNextMonth(firstDayOfMonth);
    setFirstDayOfMonth(firstDayOfNextMonth);
  };

  return (
    <div>
      <CalendarHeader
        firstDayOfMonth={firstDayOfMonth}
        onLastMonthClick={onLastMonthClick}
        onNextMonthClick={onNextMonthClick}
      />
      <CalendarBody
        firstDayOfMonth={firstDayOfMonth}
        checkedDate={checkedDate}
        onAddDateChecked={onAddDateChecked}
      />
    </div>
  );
}

export default Calendar;

Calendar.propsTpye = {
  checkedDate: PropTypes.string.isRequired,
  onAddDateChecked: PropTypes.func.isRequired,
};
