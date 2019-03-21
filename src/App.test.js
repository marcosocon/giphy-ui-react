import React from 'react';
import { shallow } from 'enzyme';
import { AppRouter } from './App';

it('renders without crashing', () => {
  const wrapper = shallow(<AppRouter />);
  expect(wrapper).toMatchSnapshot();
});
