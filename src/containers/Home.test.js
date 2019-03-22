import React from 'react';
import { shallow } from 'enzyme';
import { HomeContainer, mapDispatchToProps } from './Home';
import GifList from '../components/GifList';

describe('<Home />', () => {
  const props = {
    search: {
      loading: true,
      status: 0,
    },
    fetchTrendingGifs: jest.fn(),
  };

  it('render itself', () => {
    const wrapper = shallow(<HomeContainer {...props} />)
    expect(wrapper).toMatchSnapshot();
  });

  it('should show 2 GifList when loading is false', () => {
    const props = {
      search: {
        loading: false,
        status: 0,
      },
      fetchTrendingGifs: jest.fn(),
    }
    const wrapper = shallow(<HomeContainer {...props} />);
    expect(wrapper.find(GifList)).toHaveLength(2);
  });

  describe('mapDispatchToProps function', () => {
    it('actions should be defined', () => {
      const dispatch = () => { };
      const expectedActions = [
        'fetchTrendingGifs',
        'fetchGifsByKeyword',
        'removeFavorite',
        'addFavorite',
      ];

      const props = mapDispatchToProps(dispatch);

      expect(Object.keys(props)).toEqual(expectedActions);
    });
  });

});
