import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DeleteButton from '../DeleteButton/DeleteButton';

const ToDoItemBox = styled.li`
  padding: .5em;
`;

const CheckBox = styled.input`
  padding: .5em;
`;

const ToDoItemContent = styled.div`
  padding: .5em;
  display: inline-block;
  border-bottom: 1px solid #cecece;
`;

const DescriptionInput = styled.input`
  padding: .25em .5em;
  border: none;
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

const DateInput = styled.input`
  display: block;
  padding: .5em 1em;
  margin-left: 1em;
  border: none;
  background: #f8f8f8;
  font-size: .7em;
  color: ${(props) => (props.disabled ? 'gray' : '#282c34')};
  width: 100px;
  border-radius: .5em;

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

  handleAddDateChange = (e) => {
    this.props.onAddDate(e.target.value);
  };

  handleDeleteButtonClick = () => {
    this.props.onDelete();
  };

  render() {
    const { item: { description, isFinished, deadline } } = this.props;
    return (
      <ToDoItemBox>
        <CheckBox type="checkbox" checked={isFinished} onChange={this.handleCheckboxChange} />
        <ToDoItemContent>
          <DescriptionInput type="text" placeholder="Please input your todo" value={description} onChange={this.handleInputChange} disabled={isFinished} />
          <DateInput type="text" placeholder="Add Date" value={deadline} onChange={this.handleAddDateChange} />
        </ToDoItemContent>
        <DeleteButton onClick={this.handleDeleteButtonClick} primary={false} />
      </ToDoItemBox>
    );
  }
}

export default ToDoItem;

ToDoItem.propTypes = {
  onStatusChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onAddDate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    description: PropTypes.string,
    isFinished: PropTypes.bool,
    deadline: PropTypes.string,
  }).isRequired,
};
