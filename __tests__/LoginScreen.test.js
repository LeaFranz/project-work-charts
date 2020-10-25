import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import LoginScreen from '../screens/LoginScreen';

beforeEach(() => {
  jest.useFakeTimers();
});

it('renders correctly', () => {
  renderer.create(<LoginScreen />);
});

it('matches snapshot', () => {
  const tree = renderer.create().toJSON();
  expect(tree).toMatchSnapshot();
});
