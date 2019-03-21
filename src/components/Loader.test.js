import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';


describe('<Loader />', () => {
  it('render itself', () => {
    const loader = shallow(<Loader />);
    console.log({ loader });
  })
});
