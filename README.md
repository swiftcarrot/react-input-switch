# react-input-switch

[![npm](https://img.shields.io/npm/v/react-input-switch.svg)](https://www.npmjs.com/package/react-input-switch)
[![npm](https://img.shields.io/npm/dm/react-input-switch.svg)](https://www.npmjs.com/package/react-input-switch)
[![Build Status](https://travis-ci.org/pqx/react-input-switch.svg?branch=master)](https://travis-ci.org/pqx/react-input-switch)
[![codecov](https://codecov.io/gh/pqx/react-input-switch/branch/master/graph/badge.svg)](https://codecov.io/gh/pqx/react-input-switch)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

React toggle switch component

### Installation

```sh
npm install react-input-switch --save
yarn add react-input-switch
```

### Custom styles

```javascript
<Switch
  styles={{
    track: checked => ({
      backgroundColor: checked ? 'red' : 'blue'
    }),
    button: checked => ({
      backgroundColor: checked ? 'blue' : 'yellow'
    })
  }}
/>
```

Also `<Switch className="switch" />` will render:

```javascript
<label className="switch">
  <span className="switch-track" />
  <span className="switch-button" />
</label>
```

### Controlled example

```javascript
import Switch from 'react-input-switch';

class App extends React.Component {
  state = { value: 0 };

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

The default on/off value is 1/0 and default value is 1. This component will also render a hidden input with current value and the name prop.

```javascript
import Switch from 'react-input-switch';

class App extends React.Component {
  state = { value: 'yes' };

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
