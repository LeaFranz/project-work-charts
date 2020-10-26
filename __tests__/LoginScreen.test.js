import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';
import LoginScreen from '../screens/LoginScreen';

it('renders correctly', () => {
  const jsx = <LoginScreen />;
  const renderer = render(jsx);
  expect(renderer.toJSON()).toMatchSnapshot();
});
