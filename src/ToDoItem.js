import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';

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
    this.props.onStatusChange(e.target.checked);
  };

  handleInputChange = (e) => {
    this.props.onDescriptionChange(e.target.value);
  };

  handleDeleteButtonClick = () => {
    this.props.onDelete();
  };

  render() {
    const { item: { description, isFinished } } = this.props;
    return (
      <Li>
        <CheckBox type="checkbox" checked={isFinished} onChange={this.handleCheckboxChange} />
        <Input type="text" placeholder="Please input your todo" value={description} onChange={this.handleInputChange} disabled={isFinished} />
        <DeleteButton onClick={this.handleDeleteButtonClick} />
      </Li>
    );
  }
}

export default ToDoItem;

ToDoItem.propTypes = {
  onStatusChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    description: PropTypes.string,
    isFinished: PropTypes.bool,
  }).isRequired,
};
