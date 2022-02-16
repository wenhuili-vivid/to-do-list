import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  margin: 0;
  padding: .5em;
  border: 1px solid #81dae7;
  color: #333;
  text-align: center;
`;

const LeftArrow = styled.span`
  margin-right: 2em;
  color: #149898;
`;

const HeaderContent = styled.span`
  padding: .5em;
  font-size: 1em;
`;

const RightArrow = styled.span`
  margin-left: 2em;
  color: #149898;
`;

function CalendarHeader() {
  const [headerContent, setHeaderContent] = useState('');

  const leftArrow = '<';
  const rightArrow = '>';

  useEffect(() => {
    setHeaderContent('2022/2/3');
  }, []);

  const handleShowLastMonth = () => {

  };

  const handleShowNextMonth = () => {

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
