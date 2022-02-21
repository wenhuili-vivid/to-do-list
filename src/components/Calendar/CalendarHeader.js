import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { getHeaderContent } from './utils';

const HeaderWrapper = styled.div`
  margin: 0;
  padding: .5em;
  border: 1px solid #fdb0c9;
  color: #333;
  text-align: center;
`;

const LeftArrow = styled.span`
  margin-right: 2em;
  color: palevioletred;
  font-weight: bold;
  cursor: pointer;
`;

const RightArrow = styled.span`
  margin-left: 2em;
  color: palevioletred;
  font-weight: bold;
  cursor: pointer;
`;

const HeaderContent = styled.span`
  padding: .5em;
  font-size: 1em;
  color: #333;
`;

function CalendarHeader({ firstDayOfMonth, onLastMonthClick, onNextMonthClick }) {
  const [headerContent, setHeaderContent] = useState('');

  const leftArrow = '<';
  const rightArrow = '>';

  useEffect(() => {
    setHeaderContent(getHeaderContent(new Date(firstDayOfMonth)));
  }, [firstDayOfMonth]);

  const handleShowLastMonth = () => {
    onLastMonthClick();
  };

  const handleShowNextMonth = () => {
    onNextMonthClick();
  };

  return (
    <HeaderWrapper>
      <LeftArrow onClick={handleShowLastMonth}>
        {leftArrow}
      </LeftArrow>
      <HeaderContent>{headerContent}</HeaderContent>
      <RightArrow onClick={handleShowNextMonth}>
        {rightArrow}
      </RightArrow>
    </HeaderWrapper>
  );
}

export default CalendarHeader;

CalendarHeader.propsTpye = {
  firstDayOfMonth: PropTypes.instanceOf(Date).isRequired,
  onLastMonthClick: PropTypes.func.isRequired,
  onNextMonthClick: PropTypes.func.isRequired,
};
