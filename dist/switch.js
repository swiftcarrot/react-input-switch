'use strict';

var cx = require('classnames');
var blacklist = require('blacklist');
var React = require('react');

module.exports = React.createClass({
  displayName: 'exports',

  display: 'InputSwitch',

  getDefaultProps: function getDefaultProps() {
    return {
      checked: false
    };
  },
  render: function render() {
    var props = blacklist(this.props, 'className', 'checked', 'onChange', 'name');
    var checked = this.props.checked;

    props.className = cx('u-switch', {
      'is-checked': checked
    }, this.props.className);

    return React.createElement(
      'label',
      props,
      React.createElement('input', {
        type: 'checkbox',
        name: this.props.name,
        onClick: this.handleClick
      }),
      React.createElement('span', { className: 'track' }),
      React.createElement('span', { className: 'button' })
    );
  },
  handleClick: function handleClick() {
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  }
});