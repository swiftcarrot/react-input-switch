'use strict';

var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  display: 'InputSwitch',

  render: function render() {
    var name = this.props.name;
    var checked = !!this.props.checked;
    var classes = { 'is-checked': checked };
    classes['u-switch'] = true;
    this.checked = checked;

    return React.createElement(
      'label',
      { className: cx(classes) },
      React.createElement('input', {
        type: 'checkbox',
        name: name,
        onClick: this.handleClick
      }),
      React.createElement('span', { className: 'track' }),
      React.createElement('span', { className: 'button' })
    );
  },

  handleClick: function handleClick() {
    if (this.props.onChange) {
      this.props.onChange(!this.checked);
    }
  }
});