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
  ...props
}) => {
  const checked = value === on;
  const styles = makeStyles(customStyles, { checked });

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

export default Switch;
