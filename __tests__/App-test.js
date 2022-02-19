/**
 * @format
 */

import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import LoginScreen from '../src/screens/LoginScreen';

it('renders correctly', () => {
  renderer.create(<LoginScreen />);
});
