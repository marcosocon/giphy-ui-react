import gifsReducer, { initialState } from './gifs.reducer';

describe('gifs reducer', () => {
  it('instance and return initial state', () => {
    expect(gifsReducer(undefined, {})).toEqual(initialState);
  });

  it('should set trending gifs', () => {
    const action = {
      type: 'SET_TRENDING_GIFS',
      payload: [{ title: 'gifs' }],
    };

    const expected = {
      ...initialState,
      trendingGifs: action.payload,
    };

    expect(gifsReducer(initialState, action)).toEqual(expected);
  });
  
  it('should set searched gifs', () => {
    const action = {
      type: 'SET_FINDED_GIFS',
      payload: [{ title: 'gifs' }],
    };

    const expected = {
      ...initialState,
      searchResultGifs: action.payload,
    };

    expect(gifsReducer(initialState, action)).toEqual(expected);
  });
  
  it('should add gif to favorite', () => {
    const action = {
      type: 'ADD_FAVORITE',
      payload: [{ title: 'gifs' }],
    };

    const expected = {
      ...initialState,
      favoriteGifs: [...initialState.favoriteGifs, action.payload]
    };

    expect(gifsReducer(initialState, action)).toEqual(expected);
  });
  
  it('should remove gif from favorite', () => {
    const action = {
      type: 'REMOVE_FAVORITE',
      payload: [{ title: 'gifs' }],
    };

    const expected = {
      ...initialState,
      favoriteGifs: initialState.favoriteGifs.filter(item => item !== action.payload)
    };

    expect(gifsReducer(initialState, action)).toEqual(expected);
  });
});