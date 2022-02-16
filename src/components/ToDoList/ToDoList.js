import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';
import AddButton from '../AddButton/AddButton';
import ToDoItem from '../ToDoItem/ToDoItem';
import { getMyToDoList, setMyToDoList } from '../../store/myToDoList';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    margin: 1.5em;
`;

const Wrapper = styled.section`
    padding: 1em;
    background: papayawhip;
    text-align: center;
    height: 100vh;
`;

const ToDoListBox = styled.ul`
  list-style-type: none;  
  padding: .5em;
`;

function ToDoList() {
  const [toDoItems, setToDoItems] = useState(getMyToDoList());

  useEffect(() => {
    setMyToDoList(toDoItems);
  }, [toDoItems]);

  const getAddHandler = () => {
    setToDoItems(update(toDoItems, { $unshift: [{ isFinished: false, description: '', deadline: '' }] }));
  };

  const getDescriptionChangeHandler = (index, description) => {
    setToDoItems(update(toDoItems, { [index]: { description: { $set: description } } }));
  };

  const getStatusChangeHandler = (index, isFinished) => {
    setToDoItems(update(toDoItems, { [index]: { isFinished: { $set: isFinished } } }));
  };

  const getAddDateHandler = (index, deadline) => {
    setToDoItems(update(toDoItems, { [index]: { deadline: { $set: deadline } } }));
  };

  const getDeleteHandler = (index) => {
    setToDoItems(update(toDoItems, { $splice: [[index, 1]] }));
  };

  const renderToDoItem = (item, index) => (
    <ToDoItem
      key={index}
      item={item}
      onDescriptionChange={(description) => getDescriptionChangeHandler(index, description)}
      onStatusChange={(isFinished) => getStatusChangeHandler(index, isFinished)}
      onAddDate={(deadline) => (getAddDateHandler(index, deadline))}
      onDelete={() => (getDeleteHandler(index))}
    />
  );

  return (
    <Wrapper>
      <Title>To Do List</Title>
      <AddButton onClick={getAddHandler} primary disabled={false} label="+ Create" />
      <ToDoListBox>
        {
          toDoItems.map(renderToDoItem)
        }
      </ToDoListBox>
    </Wrapper>
  );
}

export default ToDoList;
