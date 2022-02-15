import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    background: transparent;
    color: #d84949;
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 1px solid lightcoral;
    border-radius: 3px;
`;

function DeleteButton(props) {
  const { onClick } = props;
  return (
    <Button onClick={onClick}>Delete</Button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteButton;
