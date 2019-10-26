export const makeStyles = (customStyles, { checked }) => {
  return {
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
};

export const defaultStyles = {
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
  }
};
