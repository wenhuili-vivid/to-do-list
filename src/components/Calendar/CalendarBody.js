import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  getFirstDayOfCalendar, getFirstDayOfMonth, isCurrentDay, isCurrentMonth,
} from './utils';

const BodyWrapper = styled.div`
  margin: 0;
  padding: 0;
  border-left: 1px solid palevioletred;
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
    border-right:  1px solid palevioletred;
    border-bottom: 1px solid palevioletred;
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
    border-right:  1px solid palevioletred;
    border-bottom: 1px solid palevioletred;
    color: #333;
  }
`;

function CalendarBody() {
  const [weekLabels] = useState(['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.']);
  const [firstDayOfMonth] = useState(getFirstDayOfMonth(new Date()));
  const [weekValues, setWeekValues] = useState([[]]);

  const setWeekValuesArray = () => {
    const newWeekValuesList = [];
    let dayOfCalendar = getFirstDayOfCalendar(firstDayOfMonth);

    for (let weekIndex = 0; weekIndex < 6; weekIndex += 1) {
      const weekItem = [];
      for (let dayIndex = 0; dayIndex < 7; dayIndex += 1) {
        const dayItem = {
          date: dayOfCalendar,
          day: dayOfCalendar.getDate(),
          isCurrentMonth: isCurrentMonth(firstDayOfMonth, dayOfCalendar),
          isCurrentDay: isCurrentDay(dayOfCalendar),
        };
        weekItem.push(dayItem);
        dayOfCalendar = new Date(dayOfCalendar.getTime() + 24 * 60 * 60 * 1000);
      }
      newWeekValuesList.push(weekItem);
      setWeekValues(newWeekValuesList);
    }
  };

  useEffect(() => {
    setWeekValuesArray();
  }, []);

  const handleDateChecked = (day) => {
    console.log(day);
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
        {weekValues.map((week, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <DaysInWeek key={`week ${index}`}>
            {week.map((day) => (
              <div
                key={day.date}
                role="button"
                tabIndex={0}
                onClick={() => handleDateChecked(day.day)}
                onKeyDown={() => handleDateChecked(day.day)}
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
