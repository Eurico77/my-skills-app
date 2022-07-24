import 'react-native';
import React from 'react';
import App from '../App';

import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const app = renderer.create(<App />);
  expect(app).toMatchSnapshot();

  const input = app.root.findByType('TextInput');
  input.props.onChangeText('Hello');
  expect(app).toMatchSnapshot();
});
