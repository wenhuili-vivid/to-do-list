import React from 'react';
import DeleteBtn from './DeleteBtn';

// eslint-disable-next-line react/prefer-stateless-function
class ToDoItem extends React.Component {
  render() {
    return (
      <li>
        <input type="checkbox" checked />
        <span>这是一个item</span>
        <DeleteBtn />
      </li>
    );
  }
}

export default ToDoItem;
