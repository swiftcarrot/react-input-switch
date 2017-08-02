import React, { Component } from 'react';
import InputSwitch from '../lib/switch';

class App extends Component {
  state = {
    checked: false
  };

  handleChange = checked => {
    this.setState({
      checked: checked
    });
  };

  render() {
    return (
      <div>
        <InputSwitch
          className="input-switch"
          name="checked"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <div>
          {this.state.checked ? 'checked' : 'unchecked'}
        </div>
      </div>
    );
  }
}

module.exports = App;
