import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  float: left;
  margin: 0.5rem 0 1.5em 0;
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
  width: 76%;
  min-width: 10em;
`;

export default class AddCategory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categoryName: 'Category #',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.saveCategoryNameInput = this.saveCategoryNameInput.bind(this);
  }

  handleFormSubmit(e) {
    const { addCategory } = this.props;
    const { categoryName } = this.state;

    addCategory(categoryName);
    e.preventDefault();
  }

  handleChange(e) {

    this.setState({
      categoryName: e.target.value,
    });
  }

  saveCategoryNameInput(input) {
    this.Input = input;
  }

  render() {
    return (
      <Form onSubmit={this.handleFormSubmit}>
        <Input Input placeholder="Enter category title" innerRef={(x) => { this.input = x; }} onMouseEnter={() => this.input.focus()} ref={this.saveCategoryNameInput} onChange={this.handleChange} value={this.state.categoryName} type="text" />
        <Button> Add </Button>
      </Form>
    );
  }
}
