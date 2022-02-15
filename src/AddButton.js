import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  const { onClick } = props;
  return (
    <div>
      <Button onClick={onClick}>+ Create</Button>
    </div>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddButton;
