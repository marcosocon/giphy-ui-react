import React from 'react';
import { shallow, mount } from 'enzyme';
import { HomeContainer } from './Home';
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
  })
});
