import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

function setup(props) {
  return shallow(<Loader {...props} />);
}

describe('<Loader />', () => {
  it('render itself', () => {
    const wrapper = setup({ classes: 'test' });
    console.log({ wrapper });
  })
});
