/** @jsx jsx */
import { jsx } from '@emotion/core';
import { makeStyles } from './utils';

const Switch = ({
  styles: customStyles,
  on,
  off,
  value,
  onChange,
  name,
  disabled,
  ...props
}) => {
  const checked = value === on;
  const styles = makeStyles(customStyles);

  function handleClick() {
    if (onChange) {
      onChange(checked ? off : on);
    }
  }

  return (
    <label
      {...props}
      css={[styles.container, disabled && styles.containerDisabled]}
      onClick={disabled ? null : handleClick}
    >
      <input type="hidden" name={name} value={value} />
      <span css={[styles.track, checked && styles.trackChecked]} />
      <span css={[styles.button, checked && styles.buttonChecked]} />
    </label>
  );
};

Switch.defaultProps = {
  value: 1,
  on: 1,
  off: 0,
  disabled: false,
  styles: {}
};

export default Switch;
