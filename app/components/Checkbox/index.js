import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    width: 30,
    maxWidth: 150,
    float: 'left',
    marginRight: 10,
  },
  checkbox: {
    marginBottom: 0,
  },
};

class CheckboxExampleSimple extends React.Component {
  state = {
    checked: false,
    label: ' ',
  }

  updateCheck() {
    this.setState((oldState) => ({
      checked: !oldState.checked,
    }));
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={styles.block}>
          <Checkbox
            label={this.state.label}
            checked={this.state.checked}
            onCheck={this.updateCheck.bind(this)}
            style={styles.checkbox}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default CheckboxExampleSimple;
