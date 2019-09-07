import React, { Component } from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Switch from '../switch';

test('render', () => {
  expect(renderer.create(<Switch />).toJSON()).toMatchInlineSnapshot(`
        <label
          className="css-1m7f95s-Switch"
          onClick={[Function]}
        >
          <input
            type="hidden"
            value={1}
          />
          <span
            className="css-1lmr6io-Switch"
          />
          <span
            className="css-1xb86df-Switch"
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

test('custom on/off with boolean', () => {
  class App extends Component {
    state = { value: false };

    render() {
      return (
        <Switch
          on={true}
          off={false}
          value={this.state.value}
          onChange={value => this.setState({ value })}
        />
      );
    }
  }

  const wrap = mount(<App />);

  expect(wrap.find(Switch).props().value).toEqual(false);

  wrap.find('label').simulate('click');
  expect(wrap.find(Switch).props().value).toEqual(true);
  expect(wrap.find(App).state().value).toEqual(true);

  wrap.find('label').simulate('click');
  expect(wrap.find(Switch).props().value).toEqual(false);
  expect(wrap.find(App).state().value).toEqual(false);
});
