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
    this.state = {
      toDoItems: [
        {
          isfinished: false,
          description: '学习react',
        },
      ],
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
  };

  handleDescriptionChange = (description, index) => {
    this.setState((prevState) => ({
      toDoItems: [...prevState.toDoItems].map((item, key) => (
        key === index ? { ...item, description } : item
      )),
    }));
  };

  handleStatusChange = (isFinished, index) => {
    this.setState((prevState) => ({
      toDoItems: [...prevState.toDoItems].map((item, key) => (
        key === index ? { ...item, isFinished } : item
      )),
    }));
  };

  handleDelete = (index) => {
    const toDoItems = [...this.state.toDoItems];
    toDoItems.splice(index, 1);
    this.setState(() => ({
      toDoItems,
    }));
  };

  renderToDoItem = (item, index) => (
    <ToDoItem
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
