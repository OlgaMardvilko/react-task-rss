import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Form = styled.form`
  float: right;
  margin: -0.3rem 2rem 1.5em 2rem;
`;

const Button = styled.button`
border: 1px solid rgb(183, 11, 11);
color: rgb(187, 0, 0);
font-weight: bold;
border-radius: 3px;
height: 1.7em;
width: 1.8em;
margin-left: -2.1em;
text-align: center;
`;

const Input = styled.input`
  border: 1px solid grey;
  border-radius: 3px;
  padding: 0.5em;
  height: 2.2em;
  width: 16em;
`;

export default class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Form onSubmit={this.searchFormSubmit}>
        <Input Input placeholder="Search" innerRef={x => { this.input = x }} onMouseEnter={() => this.input.focus()} type="text" />
        
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={this.props.onSearch} style={{ padding: '0px 8px', margin: '-2px 4px 0 0', fontWeight: 'bold', fontSize: '1.1em', marginLeft: '-2.1em' }}>X</button>
      </Form>
    );
  }
}
