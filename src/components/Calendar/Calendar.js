import React from 'react';
import PropTypes from 'prop-types';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

function Calendar({ checkedDate, onAddDateChecked }) {
  return (
    <div>
      <CalendarHeader />
      <CalendarBody checkedDate={checkedDate} onAddDateChecked={onAddDateChecked} />
    </div>
  );
}

export default Calendar;

CalendarBody.propsTpye = {
  checkedDate: PropTypes.string.isRequired,
  onAddDateChecked: PropTypes.func.isRequired,
};
