/** @jsx jsx */
import { jsx } from '@emotion/core';

const Switch = ({
  className,
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
    container: [
      defaultStyles.container(checked),
      customStyles.container && customStyles.container(checked)
    ],
    track: [
      defaultStyles.track(checked),
      customStyles.track && customStyles.track(checked)
    ],
    button: [
      defaultStyles.button(checked),
      customStyles.button && customStyles.button(checked)
    ]
  };

  return (
    <label
      {...props}
      className={className}
      css={styles.container}
      onClick={() => onChange && onChange(checked ? off : on)}
    >
      <input type="hidden" name={name} value={value} />
      <span className={className && `${className}-track`} css={styles.track} />
      <span
        className={className && `${className}-button`}
        css={styles.button}
      />
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
  container: () => ({
    position: 'relative',
    display: 'inline-block',
    width: 24,
    height: 14,
    verticalAlign: 'middle',
    cursor: 'pointer',
    userSelect: 'none'
  }),

  track: checked => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 7,
    backgroundColor: checked ? 'blue' : '#cccccc'
  }),

  button: checked => ({
    position: 'absolute',
    top: 2,
    bottom: 2,
    right: checked ? 2 : 11,
    left: checked ? 11 : 3,
    backgroundColor: '#fff',
    borderRadius: 9,
    transition: 'all 100ms ease'
  }),

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
