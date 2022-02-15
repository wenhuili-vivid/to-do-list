import React from 'react';
import styled from 'styled-components';
import update from 'immutability-helper';
import AddButton from './AddButton';
import ToDoItem from './ToDoItem';

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

const ListWrapper = styled.ul`
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
    let myToDoList = window.localStorage.getItem('myToDoList');
    if (myToDoList == null || myToDoList === '') {
      myToDoList = [];
    } else {
      myToDoList = JSON.parse(myToDoList);
    }
    this.setState({
      toDoItems: myToDoList,
    });
  }

  componentDidUpdate() {
    const { toDoItems } = this.state;
    window.localStorage.setItem('myToDoList', JSON.stringify(toDoItems));
  }

  getAddHandler = () => {
    const toDoItems = update(this.state, { toDoItems: { $unshift: [{ isFinished: false, description: '' }] } });
    this.setState(
      toDoItems,
    );
  };

  getDescriptionChangeHandler = (index, description) => {
    const currentDescription = description;

    this.setState((prevState) => ({
      toDoItems: prevState.toDoItems.map((item, key) => (
        key === index ? { ...item, description: currentDescription } : item
      )),
    }));
  };

  getStatusChangeHandler = (index, isFinished) => {
    const currentStatus = isFinished;
    const toDoItems = [...this.state.toDoItems];

    this.setState(() => ({
      toDoItems: toDoItems.map((item, key) => (
        key === index ? { ...item, isFinished: currentStatus } : item
      )),
    }));
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
      onDescriptionChange={this.getDescriptionChangeHandler}
      onStatusChange={this.getStatusChangeHandler}
      onDelete={() => (this.getDeleteHandler(index))}
    />
  );

  render() {
    const { toDoItems } = this.state;

    return (
      <Wrapper>
        <Title>To Do List</Title>
        <AddButton onClick={this.getAddHandler} />
        <ListWrapper>
          {
            toDoItems.map(this.renderToDoItem)
          }
        </ListWrapper>
      </Wrapper>
    );
  }
}

export default ToDoList;
