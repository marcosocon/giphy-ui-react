import searchReducer, { initialState } from './search.reducer';

describe('search reducer', () => {
  it('instance and return initial state', () => {
    expect(searchReducer(undefined, {})).toEqual(initialState);
  });

  it('should update current search', () => {
    const action = {
      type: 'SET_SEARCH_CURRENT',
      payload: 'test',
    };

    const expected = {
      ...initialState,
      currentSearch: action.payload,
    };

    expect(searchReducer(initialState, action)).toEqual(expected);
  });
  
  it('should set current search status', () => {
    const action = {
      type: 'SET_SEARCH_STATUS',
      payload: 2,
    };

    const expected = {
      ...initialState,
      status: action.payload,
    };

    expect(searchReducer(initialState, action)).toEqual(expected);
  });
  
  it('should set loading flag', () => {
    const action = {
      type: 'LOADING',
      loading: true,
    };

    const expected = {
      ...initialState,
      loading: action.payload,
    };

    expect(searchReducer(initialState, action)).toEqual(expected);
  });
  
});