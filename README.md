# react-input-switch

[![npm](https://img.shields.io/npm/v/react-input-switch.svg)](https://www.npmjs.com/package/react-input-switch)
[![npm](https://img.shields.io/npm/dm/react-input-switch.svg)](https://www.npmjs.com/package/react-input-switch)
[![Build Status](https://travis-ci.org/swiftcarrot/react-input-switch.svg?branch=master)](https://travis-ci.org/swiftcarrot/react-input-switch)
[![codecov](https://codecov.io/gh/swiftcarrot/react-input-switch/branch/master/graph/badge.svg)](https://codecov.io/gh/swiftcarrot/react-input-switch)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

React toggle switch component

### Installation

```sh
npm install react-input-switch --save
yarn add react-input-switch
```

### Demo

[https://swiftcarrot.dev/react-input-switch/](https://swiftcarrot.dev/react-input-switch/)

### Custom styles

```javascript
<Switch
  styles={{
    track: {
      backgroundColor: 'blue'
    },
    trackChecked: {
      backgroundColor: 'red'
    },
    button: {
      backgroundColor: 'yellow'
    },
    buttonChecked: {
      backgroundColor: 'blue'
    }
  }}
/>
```

### Controlled example (with hook)

```javascript
import React, { useState } from 'react';
import Switch from 'react-input-switch';

const App = () => {
  const [value, setValue] = useState(0);

  return <Switch value={value} onChange={setValue} />;
};
```

### Custom on/off value

The default on/off value is 1/0 and default value is 1. This component will also render a hidden input (`<input type="hidden"/>`) with current value and the name prop.

```javascript
import React, { useState } from 'react';
import Switch from 'react-input-switch';

const App = () => {
  const [value, setValue] = useState('yes');

  return <Switch on="yes" off="no" value={value} onChange={setValue} />;
};
```

### License

MIT
