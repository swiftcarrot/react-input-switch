import cx from 'classnames';
import blacklist from 'blacklist';
import React, { Component } from 'react';

class InputSwitch extends Component {
  static defaultProps = {
    checked: false
  };

  handleClick = () => {
    if (this.props.onChange) {
      this.props.onChange(!this.props.checked);
    }
  };

  render() {
    const { className, checked, onChange, name, ...props } = this.props;

    props.className = cx(
      'u-switch',
      {
        'is-checked': checked
      },
      className
    );

    return (
      <label {...props} onClick={this.handleClick}>
        <input type="hidden" name={name} value={checked ? 'yes' : 'no'} />
        <span className="track" />
        <span className="button" />
      </label>
    );
  }
}

module.exports = InputSwitch;
