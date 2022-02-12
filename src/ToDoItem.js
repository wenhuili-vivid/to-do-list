import React from 'react';
import styled from 'styled-components';
import DeleteBtn from './DeleteBtn';

const Li = styled.li`
    padding: .5em;
  `;

const CheckBox = styled.input`
    padding: .5em;
  `;

const Input = styled.input`
    padding: .5em;
    border: none;
    border-bottom: 1px solid #bbb;
    background: transparent;
    font-size: 1.2em;
    color: #282c34;
    width: 300px;
  `;

class ToDoItem extends React.Component {
  handleCheckboxChange = () => {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    this.props.statusChange(!this.props.item.isFinished, this.props.index);
  };

  handleInputChange = (e) => {
    // eslint-disable-next-line react/destructuring-assignment,react/prop-types
    this.props.descriptionChange(e.target.value, this.props.index);
  };

  handleClick = () => {
    // eslint-disable-next-line react/prop-types,react/destructuring-assignment
    this.props.deleteItem(this.props.index);
  };

  render() {
    // eslint-disable-next-line react/prop-types
    const { item, index } = this.props;
    return (
      <Li key={index}>
        {/* eslint-disable-next-line react/prop-types */}
        <CheckBox type="checkbox" checked={item.isFinished} onChange={this.handleCheckboxChange} />
        {/* eslint-disable-next-line react/prop-types */}
        <Input type="text" placeholder="Please input your event" value={item.description} onChange={this.handleInputChange} disabled={item.isFinished} />
        <DeleteBtn onClick={this.handleClick} />
      </Li>
    );
  }
}

export default ToDoItem;
