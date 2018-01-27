import React from 'react';
import TasksList from 'components/TasksList';
import AddTask from 'components/AddTask';
import styled from 'styled-components';

const Wrapper = styled.section`
  margin: 1em;
  width: 60%;
  float: right;
  padding: 0;
`;

const WrapperTasks = styled.section`
width: 100%;
padding: 0 1em 0 0;
overflow-y: scroll;
min-height: 100px;
height: 420px;
`;

export default class Tasks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: [
        {
          name: 'To-Do Item #1',
          id: 1,
        },
        {
          name: 'To-Do Item #2',
          id: 2,
        },
        {
          name: 'To-Do Item #3',
          id: 3,
        },
        {
          name: 'To-Do Item #4',
          id: 4,
        },
      ]
    };

    this.addTask = this.addTask.bind(this);
  }

  addTask(taskName) {
    this.setState((state) => {
      const newTasks = state.tasks.concat([{
        name: taskName,
        id: Math.random(),
      }]);

      return {
        tasks: newTasks,
      }
    })
  }

  render() {
    return (
      <Wrapper>
        <AddTask addTask={this.addTask} />
        <WrapperTasks>
          <TasksList tasks={this.state.tasks} />
        </WrapperTasks>
      </Wrapper>
    );
  }
}
