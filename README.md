# react-input-switch
Switch component

### Demo
[http://pqx.github.io/react-input-switch/example/](http://pqx.github.io/react-input-switch/example/)
### Installation
``` sh
npm install react-input-switch --save
```
### Usage
``` javascript
var InputSwitch = require('react-input-switch');

var App = React.createClass({
  getInitialState() {
    return {
      checked: false
    };
  },

  render() {
    return (
      <div>
        <InputSwitch
          checked={this.state.checked}
          onChange={this.handleChange}
        />
        <div>{this.state.checked ? 'checked' : 'unchecked'}</div>
      </div>
    );
  },

  handleChange(checked) {
    this.setState({
      checked: checked
    });
  }
});

```
### License
MIT
