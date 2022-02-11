import styled from 'styled-components';

function AddBtn() {
  const Button = styled.button`
      background: palevioletred;
      color: white;
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    `;

  return (
    <div>
      <Button>创建日程</Button>
    </div>
  );
}

export default AddBtn;
