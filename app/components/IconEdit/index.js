import React from 'react';
import PropTypes from 'prop-types';
// import { Button } from 'reactstrap';
import styled from 'styled-components';

const Div = styled.div`
  float: right;
`;

export default class IconEdit extends React.Component {

  render() {
    return (
      <Div>
        <button type="button" className="btn btn-outline-dark btn-sm" style={{ padding: '2px 5px' }}><i className="fa fa-edit" aria-hidden="true" style={{ width: '20px', height: '20px', fontSize: '24px', marginTop: '2px' }}></i></button>
      </Div>
    );
  }
}