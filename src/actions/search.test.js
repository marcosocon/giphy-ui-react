import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from './search';
import serviceFetch from '../services/fetch';

const mockstore = configureStore([thunk]);

describe('search actions', () => {
  it('should update search status', () => {
    const payload = 1;
    const expectedAction = {
      type: 'SET_SEARCH_STATUS',
      payload
    };

    expect(actions.setStatus(payload)).toEqual(expectedAction);
  });
  
  it('should update current search keyword', () => {
    const payload = 'My Keyword';
    const expectedAction = {
      type: "SET_SEARCH_CURRENT",
      payload
    };

    expect(actions.setCurrentSearch(payload)).toEqual(expectedAction);
  });
  
  it('should set current search response', () => {
    const payload = [{ title: 'My Gifs' }];
    const expectedAction = {
      type: "SET_FINDED_GIFS",
      payload
    };

    expect(actions.setFindedGifs(payload)).toEqual(expectedAction);
  });
  
  it('should set current search response', () => {
    const payload = true;
    const expectedAction = {
      type: "LOADING",
      payload
    };

    expect(actions.loading(payload)).toEqual(expectedAction);
  });

  it('should trigger fetch gifs by keyword', () => {
    const keyword = 'test';
    serviceFetch.get = jest.fn(() => Promise.resolve({ data: 'OK' }));

    const store = mockstore({
      currentSearch: '',
      loading: false,
      status: 0,
    });

    let actionsResponse;

    store.dispatch(actions.fetchGifsByKeyword(keyword)).then(() => {
      actionsResponse = store.getActions();
      
      expect(actionsResponse[0]).toEqual({ type: 'SET_SEARCH_CURRENT', payload: 'test' });
      expect(actionsResponse[1]).toEqual({ type: 'SET_SEARCH_STATUS', payload: 1 });
      expect(actionsResponse[2]).toEqual({ type: 'LOADING', payload: true });
      
      expect(actionsResponse[3]).toEqual({ type: 'SET_FINDED_GIFS', payload: 'OK' });
      expect(actionsResponse[4]).toEqual({ type: 'SET_SEARCH_STATUS', payload: 2 });
      expect(actionsResponse[5]).toEqual({ type: 'LOADING', payload: false });
    });

  });
});