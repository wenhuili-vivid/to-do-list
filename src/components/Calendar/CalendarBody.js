import React, { useState } from 'react';
import styled from 'styled-components';

const BodyWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const WeekLabel = styled.div`
  padding: .5em 0;
  display: flex;
  justify-content: center;
  align-content: center;

  div {
    padding: 1em;
    flex: 1;
    text-align: center;
    border: 1px solid #81dae7;
    color: #333;
  }
`;

function CalendarBody() {
  const [weekLabelArray] = useState([
    'Sun.',
    'Mon.',
    'Tues.',
    'Wed.',
    'Thur.',
    'Fri.',
    'Sat.',
  ]);

  return (
    <BodyWrapper>
      <WeekLabel>
        {weekLabelArray.map((label) => (
          <div>
            {label}
          </div>
        ))}
      </WeekLabel>
    </BodyWrapper>
  );
}

export default CalendarBody;
