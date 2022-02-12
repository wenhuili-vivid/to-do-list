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
  // eslint-disable-next-line no-useless-constructor
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
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
      toDoItems: [...this.state.toDoItems, newToDoItem],
    });
  };

  handleDescriptionChange = (description, index) => {
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    const toDoItems = [...this.state.toDoItems];
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      toDoItems: toDoItems.map((item, key) => (key === index ? { ...item, description } : item)),
    });
  };

  handleStatusChange = (isFinished, index) => {
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    const toDoItems = [...this.state.toDoItems];
    this.setState({
      // eslint-disable-next-line react/no-unused-state
      toDoItems: toDoItems.map((item, key) => (key === index ? { ...item, isFinished } : item)),
    });
  };

  handleDelete = (index) => {
    // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
    const toDoItems = [...this.state.toDoItems];
    toDoItems.splice(index, 1);
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
      toDoItems,
    });
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
