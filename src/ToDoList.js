import React from 'react';
import styled from 'styled-components';
import AddBtn from './AddBtn';
import ToDoItem from './ToDoItem';

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
    margin: 2em;
  `;

const Wrapper = styled.section`
    padding: 1em;
    background: papayawhip;
    text-align: center;
    height: 100vh;
  `;

class ToDoList extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      todoitems: [
        {
          isfinished: false,
          description: '学习react',
        },
      ],
    };
  }

  // eslint-disable-next-line class-methods-use-this
  handleClick = () => {
    const newitem = {
      isFinished: false,
      description: '',
    };
    this.setState({
      // eslint-disable-next-line react/destructuring-assignment,react/no-access-state-in-setstate
      todoitems: [...this.state.todoitems, newitem],
    });
  };

  // eslint-disable-next-line class-methods-use-this
  renderToDoItem = (item, index) => (
    <ToDoItem item={item} index={index} />
  );

  render() {
    const { todoitems } = this.state;

    return (
      <Wrapper>
        <Title>To Do List</Title>
        <AddBtn onClick={this.handleClick} />
        <ul>
          {
            todoitems.map((item, index) => (
              this.renderToDoItem(item, index)
            ))
          }
        </ul>
      </Wrapper>
    );
  }
}

export default ToDoList;
