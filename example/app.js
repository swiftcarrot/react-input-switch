var React = require('react');
var InputSwitch = require('../lib/switch');
require('../lib/switch.less');

var App = React.createClass({
  getInitialState() {
    return {
      checked: false
    };
  },

  render() {
    return (
      <div>
        <InputSwitch
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

React.render(<App/>, document.getElementById('app'));
