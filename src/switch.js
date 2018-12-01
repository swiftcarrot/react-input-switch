/** @jsx jsx */
import { jsx } from '@emotion/core';

const styles = {
  container: {
    position: 'relative',
    display: 'inline-block',
    width: 24,
    height: 14,
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none'
  },

  input: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },

  track: (theme, checked) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 7,
    backgroundColor: checked ? theme.primaryColor : '#cccccc'
  }),

  button: (theme, checked) => ({
    position: 'absolute',
    top: 2,
    bottom: 2,
    right: checked ? 2 : 11,
    left: checked ? 11 : 3,
    backgroundColor: '#fff',
    borderRadius: 9,
    transition: 'all 100ms ease'
  })
};

const handleChange = ({ on, off, value, onChange }) => {
  if (onChange) {
    if (value === on) {
      onChange(off);
    } else {
      onChange(on);
    }
  }
};

const Switch = ({ theme, on, off, value, onChange, name, ...props }) => {
  const checked = value === on;

  return (
    <label
      {...props}
      css={styles.container}
      onClick={() => handleChange({ on, off, value, onChange })}
    >
      <input type="hidden" name={name} value={value} />
      <span css={styles.track(theme, checked)} />
      <span css={styles.button(theme, checked)} />
    </label>
  );
};

Switch.defaultProps = {
  value: 1,
  on: 1,
  off: 0,
  theme: {
    primaryColor: 'blue'
  }
};

export default Switch;
