import React from 'react';
import { shallow } from 'enzyme';
import HomeContainer from './Home';
import { initialState as searchinitialState } from '../reducers';

describe('<Home />', () => {
  it('render itself', () => {
    const wrapper = shallow(<HomeContainer />)
    expect(wrapper).toMatchSnapshot();
  })
});
