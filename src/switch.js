/** @jsx jsx */
import { jsx } from '@emotion/core';

const Switch = ({
  styles: customStyles,
  on,
  off,
  value,
  onChange,
  name,
  ...props
}) => {
  const checked = value === on;
  const styles = {
    container: [defaultStyles.container, customStyles.container],
    track: [
      { ...defaultStyles.track, ...customStyles.track },
      checked && { ...defaultStyles.trackChecked, ...customStyles.trackChecked }
    ],
    button: [
      { ...defaultStyles.button, ...customStyles.button },
      checked && {
        ...defaultStyles.buttonChecked,
        ...customStyles.buttonChecked
      }
    ]
  };

  return (
    <label
      {...props}
      css={styles.container}
      onClick={() => onChange && onChange(checked ? off : on)}
    >
      <input type="hidden" name={name} value={value} />
      <span css={styles.track} />
      <span css={styles.button} />
    </label>
  );
};

Switch.defaultProps = {
  value: 1,
  on: 1,
  off: 0,
  styles: {}
};

const defaultStyles = {
  container: {
    position: 'relative',
    display: 'inline-block',
    width: 24,
    height: 14,
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none'
  },

  track: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 7,
    backgroundColor: '#cccccc'
  },

  trackChecked: {
    backgroundColor: '#5e72e4'
  },

  button: {
    position: 'absolute',
    top: 2,
    bottom: 2,
    right: 11,
    left: 2,
    backgroundColor: '#fff',
    borderRadius: 9,
    transition: 'all 100ms ease'
  },

  buttonChecked: {
    right: 2,
    left: 11
  },

  input: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
};

export default Switch;
