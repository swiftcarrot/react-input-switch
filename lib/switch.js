var cx = require('classnames');
var React = require('react');

module.exports = React.createClass({
  display: 'InputSwitch',

  render() {
    var name = this.props.name;
    var checked = !!this.props.checked;
    this.checked = checked;

    return (
      <label className={cx('u-switch', {
        'is-checked': checked
      }, this.props.className)}>
        <input
          type="checkbox"
          name={name}
          onClick={this.handleClick}
        />
        <span className="track"></span>
        <span className="button"></span>
      </label>
    );
  },

  handleClick() {
    if(this.props.onChange) {
      this.props.onChange(!this.checked);
    }
  }
});
