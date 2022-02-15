import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
    background: ${(props) => (props.primary ? '#d84949' : 'transparent')};
    color:  ${(props) => (props.primary ? 'white' : '#d84949')};
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 1px solid lightcoral;
    border-radius: 3px;
`;

function DeleteButton(props) {
  const { onClick, primary } = props;
  return (
    <Button onClick={onClick} primary={primary}>Delete</Button>
  );
}

DeleteButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  primary: PropTypes.bool.isRequired,
};

export default DeleteButton;
