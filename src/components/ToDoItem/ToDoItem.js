import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DeleteButton from '../DeleteButton/DeleteButton';

const ToDoItemBox = styled.li`
  padding: .5em;
`;

const CheckBox = styled.div`
  margin: auto .5em 1.2em;
  display: inline-block;
  vertical-align: middle;
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

function ToDoItem({ ...props }) {
  const handleCheckboxChange = (e) => {
    props.onStatusChange(e.target.checked);
  };

  const handleDescriptionChange = (e) => {
    props.onDescriptionChange(e.target.value);
  };

  const handleAddDateFocus = () => {
    props.onAddDateFocus();
  };

  const handleAddDateChange = () => {
    props.onAddDateChange();
  };

  const handleDeleteButtonClick = () => {
    props.onDelete();
  };

  const { item: { description, isFinished, deadline } } = props;
  return (
    <ToDoItemBox>
      <CheckBox>
        <input type="checkbox" checked={isFinished} onChange={handleCheckboxChange} />
      </CheckBox>
      <ToDoItemContent>
        <DescriptionInput type="text" placeholder="Please input your todo" value={description} onChange={handleDescriptionChange} disabled={isFinished} />
        <DateInput type="text" placeholder="Add Date" value={deadline} onFocus={handleAddDateFocus} onChange={handleAddDateChange} readOnly />
      </ToDoItemContent>
      <DeleteButton onClick={handleDeleteButtonClick} primary={false}>Delete</DeleteButton>
    </ToDoItemBox>
  );
}

export default ToDoItem;

ToDoItem.propTypes = {
  onStatusChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onAddDateFocus: PropTypes.func.isRequired,
  onAddDateChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  item: PropTypes.shape({
    description: PropTypes.string,
    isFinished: PropTypes.bool,
    deadline: PropTypes.string,
  }).isRequired,
};
