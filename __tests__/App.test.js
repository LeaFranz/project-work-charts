import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

beforeEach(() => {
  jest.useFakeTimers();
});

it('renders correctly', () => {
  renderer.create(<App />);
});
