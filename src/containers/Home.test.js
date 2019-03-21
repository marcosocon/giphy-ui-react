import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import { initialState as searchinitialState } from '../reducers';

function setup(props) {
  return shallow(<Home {...props} />);
}

describe('<Home />', () => {
  it('render itself', () => {
    const wrapper = setup({
      history: {},
      trending: [],
      results: [],
      favorites: [],
      search: searchinitialState,
      addFavorite: jest.fn(),
      removeFavorite: jest.fn(),
    });

    console.log({ wrapper });
  })
});
