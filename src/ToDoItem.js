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
    color: ${(props) => (props.disabled ? 'gray' : '#282c34')};
    width: 300px;
    
    :focus {
      outline: none;
    }
  
    :disabled {
      text-decoration: line-through;
    }
  `;

class ToDoItem extends React.Component {
  handleCheckboxChange = (e) => {
    this.props.statusChange(e.target.checked, this.props.index);
  };

  handleInputChange = (e) => {
    this.props.descriptionChange(e.target.value, this.props.index);
  };

  handleDeleteBtnClick = () => {
    this.props.deleteItem(this.props.index);
  };

  render() {
    const { item: { description, isFinished } } = this.props;
    return (
      <Li>
        <CheckBox type="checkbox" checked={isFinished} onChange={this.handleCheckboxChange} />
        <Input type="text" placeholder="Please input your todo" value={description} onChange={this.handleInputChange} disabled={isFinished} />
        <DeleteBtn onClick={this.handleDeleteBtnClick} disabled={isFinished} />
      </Li>
    );
  }
}

export default ToDoItem;
