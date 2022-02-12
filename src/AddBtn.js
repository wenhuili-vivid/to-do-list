import React from 'react';
import styled from 'styled-components';

function AddBtn(props) {
  const Button = styled.button`
    background: palevioletred;
    color: white;
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 1px solid palevioletred;
    border-radius: 3px;
  `;

  return (
    <div>
      {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
      <Button onClick={props.onClick}>+ Create</Button>
    </div>
  );
}

export default AddBtn;
