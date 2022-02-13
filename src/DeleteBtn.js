import styled from 'styled-components';

function DeleteBtn(props) {
  const Button = styled.button`
    background: transparent;
    color: #d84949;
    font-size: 1em;
    margin: 0.5em;
    padding: 0.25em 1em;
    border: 1px solid lightcoral;
    border-radius: 3px;
  `;

  return (
  // eslint-disable-next-line react/destructuring-assignment
    <Button onClick={props.onClick}>Delete</Button>
  );
}

export default DeleteBtn;
