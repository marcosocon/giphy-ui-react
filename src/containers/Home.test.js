import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';


describe('<Loader />', () => {
  it('render itself', () => {
    const loader = shallow(<Home />);
    console.log({ loader });
  })
});
