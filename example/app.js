var React = require('react');
var InputSwitch = require('../lib/switch');

module.exports = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      checked: false
    };
  },

  render() {
    return (
      <div>
        <InputSwitch
          className="input-switch"
          name="checked"
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <div>{this.state.checked ? 'checked' : 'unchecked'}</div>
      </div>
    );
  },

  handleChange(checked) {
    this.setState({
      checked: checked
    });
  }
});
