import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox';
import IconTrash from 'components/IconTrash';
import IconPlus from 'components/IconPlus';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  width: 100%;
  height: 300em;
  overflow-y: hidden;
  padding: 0;
  margin: 0;
  border-top: 1px solid grey;
`;

const Li = styled.li`
  padding: 0.5em;
  border: 1px solid grey;
  border-top: none;
`;

export default class CategoriesList extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    categories: [],
  }

  static propTypes = {
    categories: PropTypes.array,
  }

  render() {
    return (
      <Ul>
        {
          this.props.categories.map((category, index) => {
            return (
              <Li key={category.id}> 
                <Checkbox checkbox={this.checkbox} />
                <IconPlus />
                <IconTrash />
                {category.name}
              </Li>
            );
          })
        }
      </Ul>
    );
  }
}