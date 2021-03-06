import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './trending';
import { GIFS, SEARCH } from './actionsTypes';
import serviceFetch from '../services/fetch';

const mockstore = configureStore([thunk]);

describe('trending actions', () => {
  it('should update search status', () => {
    const payload = [{ title: 'my gifs' }];
    const expectedAction = {
      type: GIFS.SET_TRENDING,
      payload
    };

    expect(actions.setTrendingGifs(payload)).toEqual(expectedAction);
  });

  it('should trigger fetch gifs by keyword', () => {
    serviceFetch.get = jest.fn(() => Promise.resolve({ data: 'OK' }));

    const store = mockstore({
      currentSearch: '',
      loading: false,
      status: 0,
    });

    let asyncActions;

    store.dispatch(actions.fetchTrendingGifs()).then(() => {
      asyncActions = store.getActions();

      expect(asyncActions[0]).toEqual({ type: SEARCH.LOADING, payload: true });
      expect(asyncActions[1]).toEqual({ type: SEARCH.LOADING, payload: false });
      expect(asyncActions[2]).toEqual({ type: GIFS.SET_TRENDING, payload: 'OK' });
    });
  });
});