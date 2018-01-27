import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox';
import IconEdit from 'components/IconEdit';
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
  // display: flex;
  padding: 2em;
  border: 1px solid grey;
  border-top: none;
`;

// import Item from './Item';
// import Wrapper from './Wrapper';

export default class TasksList extends React.Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    tasks: [],
  }

  static propTypes = {
    tasks: PropTypes.array,
  }

  render() {
    return (
      <Ul>
        {
          this.props.tasks.map((task, index) => {
            return (
              <Li key={task.id}> 
                <Checkbox checkbox={this.checkbox} />
                <IconEdit />
                {task.name}
              </Li>
            );
          })
        }
      </Ul>
    );
  }
}
