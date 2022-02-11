import React from 'react';
import styled from 'styled-components';
import AddBtn from './AddBtn';
import ToDoItem from './ToDoItem';

function ToDoListTitle() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    margin: 2em;
  `;

  return (
    <Title>To Do List</Title>
  );
}

// eslint-disable-next-line react/prefer-stateless-function
class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <ToDoListTitle />
        <AddBtn />
        <ul>
          <ToDoItem />
        </ul>
      </div>
    );
  }
}

export default ToDoList;
