import React from 'react';
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

class ToDoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toDoItems: [],
    };
  }

  componentDidMount() {
    this.setState({
      toDoItems: getMyToDoList(),
    });
  }

  componentDidUpdate() {
    const { toDoItems } = this.state;
    setMyToDoList(toDoItems);
  }

  getAddHandler = () => {
    const toDoItems = update(this.state, { toDoItems: { $unshift: [{ isFinished: false, description: '', deadline: '' }] } });
    this.setState(
      toDoItems,
    );
  };

  getDescriptionChangeHandler = (index, description) => {
    const toDoItems = update(this.state, {
      toDoItems: {
        [index]: {
          description: { $set: description },
        },
      },
    });
    this.setState(
      toDoItems,
    );
  };

  getStatusChangeHandler = (index, isFinished) => {
    const toDoItems = update(this.state, {
      toDoItems: {
        [index]: {
          isFinished: { $set: isFinished },
        },
      },
    });
    this.setState(
      toDoItems,
    );
  };

  getAddDateHandler = (index, deadline) => {
    const toDoItems = update(this.state, {
      toDoItems: {
        [index]: {
          deadline: { $set: deadline },
        },
      },
    });
    this.setState(
      toDoItems,
    );
  };

  getDeleteHandler = (index) => {
    const toDoItems = update(this.state, { toDoItems: { $splice: [[index, 1]] } });
    this.setState(
      toDoItems,
    );
  };

  renderToDoItem = (item, index) => (
    <ToDoItem
      key={index}
      item={item}
      onDescriptionChange={(description) => this.getDescriptionChangeHandler(index, description)}
      onStatusChange={(isFinished) => this.getStatusChangeHandler(index, isFinished)}
      onAddDate={(deadline) => (this.getAddDateHandler(index, deadline))}
      onDelete={() => (this.getDeleteHandler(index))}
    />
  );

  render() {
    const { toDoItems } = this.state;

    return (
      <Wrapper>
        <Title>To Do List</Title>
        <AddButton onClick={this.getAddHandler} primary disabled={false} label="+ Create" />
        <ToDoListBox>
          {
            toDoItems.map(this.renderToDoItem)
          }
        </ToDoListBox>
      </Wrapper>
    );
  }
}

export default ToDoList;
