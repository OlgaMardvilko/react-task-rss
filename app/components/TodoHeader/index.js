import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox';
import ProgressBar from 'components/ProgressBar';
import Search from 'components/Search';
import styled from 'styled-components';

const WrapperHeader = styled.div`
  margin-top: 20px;
`;

const WrapperSearch = styled.div`
  width: 38%;
  float: right;
`;

const H2 = styled.h2`
  color: #dc3545;
  margin-left: 20px;
`;

const P = styled.p`
  float: right;
  margin: 0 15px 0 -15px;
`;

export default class TodoHeader extends React.Component {

  render() {
    return (
      <WrapperHeader>
        <WrapperSearch>
          <Search />
          <P>Show done</P>
          <Checkbox checkbox={this.checkbox} style={{ marginTop: '14px', marginRight: '0px', float: 'right' }} />
        </WrapperSearch>
        <H2>To-do List </H2>
        <ProgressBar />
      </WrapperHeader>
    );
  }
}
