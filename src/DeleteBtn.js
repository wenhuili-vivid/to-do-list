import styled from 'styled-components';

function DeleteBtn() {
  const Button = styled.button`
    display: inline-block;
    background: white;
    color: red;
    font-size: 1em;
    margin: 1em;
    padding: 0.3em 0.6em;
    border: 1px solid red;
    border-radius: 1em;
  `;

  return (
    <Button>X</Button>
  );
}

export default DeleteBtn;
