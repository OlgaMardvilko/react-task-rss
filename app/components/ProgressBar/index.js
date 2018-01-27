import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LinearProgress from 'material-ui/LinearProgress';

export default class LinearProgressExampleDeterminate extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      completed: 60,
    };
  }

  componentDidMount() {
    // this.timer = setTimeout(() => this.progress(5), 1000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  render() {
    return (
      <MuiThemeProvider>
        <LinearProgress mode="determinate" value={this.state.completed} style={{height: '10px', width: '96%', margin: '0 auto'}} />
      </MuiThemeProvider>
    );
  }
}
