import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'reactstrap';
import styled from 'styled-components';

const Div = styled.div`
  float: right;
`;

export default class IconTrash extends React.Component {

  render() {
    return (
      <Div>
        <button type="button" className="btn btn-outline-danger btn-sm" onClick={this.deleteCategory} style={{ padding: '2px 5px', margin: '-2px 4px 0 0' }}><i className="fa fa-trash-o" aria-hidden="true" style={{ width: '20px', height: '20px', fontSize: '18px', marginTop: '2px' }}></i></button>
      </Div>
    );
  }
}
