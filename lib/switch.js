var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

module.exports = React.createClass({
  display: 'InputSwitch',

  getDefaultProps() {
    return {
      checked: false
    };
  },

  render() {
    var props = blacklist(this.props, 'className', 'checked', 'onChange', 'name');
    var checked = this.props.checked;

    props.className = cx('u-switch', {
      'is-checked': checked
    }, this.props.className);

    props.onClick = this.handleClick;

    return (
      <label {... props}>
        <input
          type="hidden"
          name={this.props.name}
          value={checked ? 'yes' : 'no'}
        />
        <span className="track"></span>
        <span className="button"></span>
      </label>
    );
  },

  handleClick() {
    if(this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  }
});
