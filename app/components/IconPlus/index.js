import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  float: right;
`;

export default class IconPlus extends React.Component {

  render() {
    return (
      <Div>
        <button type="button" className="btn btn-outline-primary btn-sm" style={{ padding: '2px 5px', margin: '-2px 0 0 4px' }}><i className="fa fa-plus" aria-hidden="true" style={{ width: '20px', height: '20px', fontSize: '18px', marginTop: '2px' }}></i></button>
      </Div>
    );
  }
}
