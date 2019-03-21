import React from 'react';
import { mount } from 'enzyme';
import Loader from './Loader';

function setup(props) {
  return mount(<Loader {...props} />);
}

describe('<Loader />', () => {
  it('render itself', () => {
    const wrapper = setup({ classes: 'test' });
    console.log({ wrapper });
  })
});
