# react-input-switch

[![npm](https://img.shields.io/npm/v/react-input-switch.svg)](https://www.npmjs.com/package/react-input-switch)
[![npm](https://img.shields.io/npm/dm/react-input-switch.svg)](https://www.npmjs.com/package/react-input-switch)
[![Build Status](https://travis-ci.org/pqx/react-input-switch.svg?branch=master)](https://travis-ci.org/pqx/react-input-switch)
[![codecov](https://codecov.io/gh/pqx/react-input-switch/branch/master/graph/badge.svg)](https://codecov.io/gh/pqx/react-input-switch)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

Switch component

### Demo

[http://pqx.github.io/react-input-switch](http://pqx.github.io/react-input-switch)

### Installation

```sh
npm install react-input-switch --save
yarn add react-input-switch
```

### Theming

```javascript
<Switch theme={{ primaryColor: 'blue' }} />
```

### Controlled

```javascript
import Switch from 'react-input-switch';

class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  render() {
    return (
      <Switch
        value={this.state.value}
        onChange={value => this.setState({ value })}
      />
    );
  }
}
```

#### Custom on/off value

```javascript
import Switch from 'react-input-switch';

class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'yes' };
  }

  render() {
    return (
      <>
        <Switch
          value={this.state.value}
          on="yes"
          off="no"
          onChange={value => this.setState({ value })}
        />
        {this.state.value}
      </>
    );
  }
}
```

### License

MIT
