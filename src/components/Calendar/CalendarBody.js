import React, { useState } from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const WeekLabel = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  div {
    padding: .5em;
    flex: 1;
    text-align: center;
    border: 1px solid palevioletred;
    color: #333;
  }
`;

const DaysInWeek = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;

  div {
    padding: .5em;
    flex: 1;
    text-align: center;
    border: 1px solid palevioletred;
    color: #333;
  }
`;

function CalendarBody() {
  const [weekLabelArray] = useState(['Sun.', 'Mon.', 'Tues.', 'Wed.', 'Thur.', 'Fri.', 'Sat.']);

  return (
    <BodyWrapper>
      <WeekLabel>
        {weekLabelArray.map((label) => (
          <div key={label}>
            {label}
          </div>
        ))}
      </WeekLabel>
      <DaysInWeek />
    </BodyWrapper>
  );
}

export default CalendarBody;
