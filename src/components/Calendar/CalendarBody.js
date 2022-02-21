import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  dateFormat, getFirstDayOfCalendar, isCurrentDay, isCurrentMonth,
} from './utils';

const BodyWrapper = styled.div`
  margin: 0;
  padding: 0;
  border-left: 1px solid #fdb0c9;
  font-size: .8em;
  text-align: center;
`;

const WeekLabel = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  div {
    padding: .5em;
    flex: 1;
    border-right:  1px solid #fdb0c9;
    border-bottom: 1px solid #fdb0c9;
    color: #333;
  }
`;

const WeekList = styled.div`
  display: block;
`;

const DaysInWeek = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  width: 100%;

  div {
    padding: .5em;
    flex: 1;
    border-right:  1px solid #fdb0c9;
    border-bottom: 1px solid #fdb0c9;
    color: #888;
    background: #e8e8e8;
  }
  
  .current-month {
    color: #444;
    background: white;
  }
  
  .current-day {
    color: palevioletred;
    background: white;
    font-weight: bold;
  }
`;

function CalendarBody({ firstDayOfMonth, onAddDateChecked }) {
  const [weekValues, setWeekValues] = useState([]);
  const weekLabels = ['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.'];

  const setWeekValuesArray = () => {
    const newWeekValuesList = [];
    let dayOfCalendar = getFirstDayOfCalendar(firstDayOfMonth);

    for (let weekIndex = 0; weekIndex < 6; weekIndex += 1) {
      const weekItem = {
        id: weekIndex,
        daysInWeek: [],
      };
      for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
        const dayItem = {
          date: dayOfCalendar,
          day: dayOfCalendar.getDate(),
          isCurrentMonth: isCurrentMonth(firstDayOfMonth, dayOfCalendar),
          isCurrentDay: isCurrentDay(dayOfCalendar),
        };
        weekItem.daysInWeek.push(dayItem);
        dayOfCalendar = new Date(dayOfCalendar.getTime() + 24 * 60 * 60 * 1000);
      }
      newWeekValuesList.push(weekItem);
      setWeekValues(newWeekValuesList);
    }
  };

  useEffect(() => {
    setWeekValuesArray();
  }, [firstDayOfMonth]);

  const handleDateChecked = (date) => {
    onAddDateChecked(dateFormat(date, 'dd/MM/yy'));
  };

  return (
    <BodyWrapper>
      <WeekLabel>
        {weekLabels.map((label) => (
          <div key={label}>
            {label}
          </div>
        ))}
      </WeekLabel>
      <WeekList>
        {weekValues.map((week) => (
          <DaysInWeek key={week.id}>
            {week.daysInWeek.map((day) => (
              <div
                key={day.date}
                role="button"
                tabIndex={0}
                onClick={() => handleDateChecked(day.date)}
                onKeyDown={() => handleDateChecked(day.date)}
                className={`${day.isCurrentMonth ? 'current-month' : ''
                } ${day.isCurrentDay ? 'current-day' : ''}`}
              >
                {day.day}
              </div>
            ))}
          </DaysInWeek>
        ))}
      </WeekList>
    </BodyWrapper>
  );
}

export default CalendarBody;

CalendarBody.propsTpye = {
  onAddDateChecked: PropTypes.func.isRequired,
  onLastMonthClick: PropTypes.func.isRequired,
  onNextMonthClick: PropTypes.func.isRequired,
};
