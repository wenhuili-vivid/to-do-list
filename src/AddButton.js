import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    background: palevioletred;
    color: white;
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 1px solid palevioletred;
    border-radius: 3px;
`;

function AddButton(props) {
  return (
    <div>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      <Button onClick={props.onClick}>+ Create</Button>
    </div>
  );
}

export default AddButton;
