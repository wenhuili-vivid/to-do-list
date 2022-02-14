import React from 'react';
import styled from 'styled-components';
import AddBtn from './AddBtn';
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

const Ul = styled.ul`
  list-style-type: none;  
  padding: .5em;
  `;

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    let myToDoList = window.localStorage.getItem('myToDoList');
    if (myToDoList == null || myToDoList === '') {
      myToDoList = []; // 初始化值
    } else {
      myToDoList = myToDoList.split(',');
    }
    this.state = {
      toDoItems: myToDoList,
    };
  }

  handleAdd = () => {
    const newToDoItem = {
      isFinished: false,
      description: '',
    };
    this.setState((prevState) => ({
      toDoItems: [newToDoItem, ...prevState.toDoItems],
    }));
    window.localStorage.setItem('myToDoList', JSON.stringify(this.state.toDoItems));
  };

  handleDescriptionChange = (description, index) => {
    const currentDescription = description;
    const toDoItems = [...this.state.toDoItems];

    this.setState(() => ({
      toDoItems: toDoItems.map((item, key) => (
        key === index ? { ...item, description: currentDescription } : item
      )),
    }));
    window.localStorage.setItem('myToDoList', JSON.stringify(this.state.toDoItems));
  };

  handleStatusChange = (isFinished, index) => {
    const currentStatus = isFinished;
    const toDoItems = [...this.state.toDoItems];

    this.setState(() => ({
      toDoItems: toDoItems.map((item, key) => (
        key === index ? { ...item, isFinished: currentStatus } : item
      )),
    }));
    window.localStorage.setItem('myToDoList', JSON.stringify(this.state.toDoItems));
  };

  handleDelete = (index) => {
    const toDoItems = this.state.toDoItems.filter((item, key) => key !== index);
    this.setState(() => ({
      toDoItems,
    }));
    window.localStorage.setItem('myToDoList', JSON.stringify(this.state.toDoItems));
  };

  renderToDoItem = (item, index) => (
    <ToDoItem
      key={index}
      item={item}
      index={index}
      descriptionChange={this.handleDescriptionChange}
      statusChange={this.handleStatusChange}
      deleteItem={this.handleDelete}
    />
  );

  render() {
    const { toDoItems } = this.state;

    return (
      <Wrapper>
        <Title>To Do List</Title>
        <AddBtn onClick={this.handleAdd} />
        <Ul>
          {
            toDoItems.map((item, index) => (
              this.renderToDoItem(item, index)
            ))
          }
        </Ul>
      </Wrapper>
    );
  }
}

export default ToDoList;
