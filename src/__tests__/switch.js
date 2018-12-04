import React, { Component } from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Switch from '../switch';

test('render', () => {
  const component = renderer.create(<Switch />);
  expect(component.toJSON()).toMatchInlineSnapshot(`
<label
  className="css-1m7f95s-Switch"
  onClick={[Function]}
>
  <input
    type="hidden"
    value={1}
  />
  <span
    className="css-5qfbhd-Switch"
  />
  <span
    className="css-1x4cdny-Switch"
  />
</label>
`);
});

test('value', () => {
  class App extends Component {
    state = { value: 0 };

    render() {
      return (
        <Switch
          theme={{ primaryColor: 'blue' }}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      );
    }
  }

  const wrap = mount(<App />);

  expect(wrap.find(Switch).props().value).toEqual(0);

  wrap.find('label').simulate('click');
  expect(wrap.find(Switch).props().value).toEqual(1);
  expect(wrap.find(App).state().value).toEqual(1);

  wrap.find('label').simulate('click');
  expect(wrap.find(Switch).props().value).toEqual(0);
  expect(wrap.find(App).state().value).toEqual(0);
});

test('custom on/off', () => {
  class App extends Component {
    state = { value: 'no' };

    render() {
      return (
        <Switch
          theme={{ primaryColor: 'blue' }}
          on="yes"
          off="no"
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      );
    }
  }

  const wrap = mount(<App />);

  expect(wrap.find(Switch).props().value).toEqual('no');

  wrap.find('label').simulate('click');
  expect(wrap.find(Switch).props().value).toEqual('yes');
  expect(wrap.find(App).state().value).toEqual('yes');

  wrap.find('label').simulate('click');
  expect(wrap.find(Switch).props().value).toEqual('no');
  expect(wrap.find(App).state().value).toEqual('no');
});

test('className', () => {
  const component = renderer.create(<Switch className="test" />);
  expect(component.toJSON()).toMatchInlineSnapshot(`
<label
  className="test css-1m7f95s-Switch"
  onClick={[Function]}
>
  <input
    type="hidden"
    value={1}
  />
  <span
    className="test-track css-5qfbhd-Switch"
  />
  <span
    className="test-button css-1x4cdny-Switch"
  />
</label>
`);
});
