import React from 'react';
import DeleteBtn from './DeleteBtn';

class ToDoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false,
      description: '',
    };
  }

  handleChange = () => {
    const { isFinished } = this.state;
    this.setState({
      isFinished: !isFinished,
    });
  };

  handleInput = (e) => {
    this.setState({
      description: e.target.value,
    });
  };

  render() {
    const { isFinished, description } = this.state;
    return (
      <li>
        <input type="checkbox" checked={isFinished} onChange={this.handleChange} />
        <input type="text" placeholder="Please input your event" value={description} onChange={this.handleInput} disabled={isFinished} />
        <DeleteBtn />
      </li>
    );
  }
}

export default ToDoItem;
