import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
    color:  ${(props) => (props.primary ? 'white' : 'palevioletred')};
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 1px solid palevioletred;
    border-radius: 3px;
  
    :disabled {
      background: ${(props) => (props.primary ? '#e0a3b7' : 'white')};
      color:  ${(props) => (props.primary ? 'white' : '#e0a3b7')};
      border: 1px solid #e0a3b7;
    }
`;

function AddButton(props) {
  const {
    onClick, primary, disabled, label,
  } = props;
  return (
    <div>
      <Button onClick={onClick} primary={primary} disabled={disabled}>{label}</Button>
    </div>
  );
}

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool.isRequired,
  disabled: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
};

export default AddButton;
