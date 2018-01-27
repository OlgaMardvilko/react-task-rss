import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  float: right;
  margin: 0.5rem 2rem 1.5em 2rem;
`;

const Button = styled.button`
  border: 1px solid #007bff;
  color: white;
  background-color: #007bff;
  border-radius: 0px 3px 3px 0px;
  height: 2.5em;
  width: 4em;
`;


const Input = styled.input`
  border: 1px solid grey;
  border-right: none;
  border-radius: 3px 0px 0px 3px;
  padding: 0.5em;
  height: 2.5em;
  width: 25em;
  min-width: 10em;
`;

export default class AddTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskName: 'To-Do Item #',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.saveTaskNameInput = this.saveTaskNameInput.bind(this);
  }

  handleFormSubmit(e) {
    const { addTask } = this.props;
    const { taskName } = this.state;

    addTask(taskName);
    e.preventDefault();
  }

  handleChange(e) {

    this.setState({
      taskName: e.target.value,
    })
  }

  saveTaskNameInput(input) {
    this.Input = input;
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Input Input placeholder="Enter task title" innerRef={x => { this.input = x }} onMouseEnter={() => this.input.focus()} ref={this.saveTaskNameInput} onChange={this.handleChange} value={this.state.taskName} type="text" />
        <Button> Add </Button>
      </Form>
    );
  }
}
