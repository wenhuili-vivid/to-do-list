import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';
import AddButton from '../AddButton/AddButton';
import ToDoItem from '../ToDoItem/ToDoItem';
import { getMyToDoList, setMyToDoList } from '../../store/myToDoList';
import Modal from '../Modal/Modal';
import Calendar from '../Calendar/Calendar';

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
    overflow-y: scroll;
`;

const ToDoListBox = styled.ul`
  list-style-type: none;  
  padding: .5em;
`;

function ToDoList() {
  const [toDoItems, setToDoItems] = useState(getMyToDoList());
  const [isShowModal, setIsShowModal] = useState(false);
  const [currentCheckedDate, setCurrentCheckedDate] = useState(new Date());
  const [operatingToDoItemIndex, setOperatingToDoItemIndex] = useState(0);
  const [modalPositionTop, setModalPositionTop] = useState('0px');
  const [modalPositionLeft, setModalPositionLeft] = useState('0px');

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

  const getAddDateFocusHandler = (index) => {
    const element = document.getElementsByTagName('li')[index].children[1];
    setModalPositionTop(`${element.offsetTop + element.offsetHeight}px`);
    setModalPositionLeft(`${element.offsetLeft}px`);
    setIsShowModal(true);
    setOperatingToDoItemIndex(index);
  };

  const getAddDateChangeHandler = (index) => {
    setToDoItems(update(toDoItems, { [index]: { deadline: { $set: currentCheckedDate } } }));
  };

  const getAddDateCheckedHandler = (deadline) => {
    setIsShowModal(false);
    setCurrentCheckedDate(deadline);
    setToDoItems(update(toDoItems, {
      [operatingToDoItemIndex]: { deadline: { $set: deadline } },
    }));
  };

  const getAddDateCloseHandler = () => {
    setIsShowModal(false);
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
      onAddDateFocus={() => getAddDateFocusHandler(index)}
      onAddDateChange={() => (getAddDateChangeHandler(index))}
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
      <Modal
        onOpen={isShowModal}
        onClose={getAddDateCloseHandler}
        top={modalPositionTop}
        left={modalPositionLeft}
      >
        <Calendar checkedDate={currentCheckedDate} onAddDateChecked={getAddDateCheckedHandler} />
      </Modal>
    </Wrapper>
  );
}

export default ToDoList;
