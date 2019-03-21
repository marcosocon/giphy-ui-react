import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('<Loader />', () => {
  it('render itself', () => {
    const component = shallow(<Loader />);
    expect(component).toMatchSnapshot();
  });
});
