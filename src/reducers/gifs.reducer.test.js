import gifsReducer, { initialState } from './gifs.reducer';
import { GIFS } from '../actions/actionsTypes';

describe('gifs reducer', () => {
  it('instance and return initial state', () => {
    expect(gifsReducer(undefined, {})).toEqual(initialState);
  });

  it('should set trending gifs', () => {
    const action = {
      type: GIFS.SET_TRENDING,
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
      type: GIFS.SET_FINDED,
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
      type: GIFS.ADD_FAVOTITE,
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
      type: GIFS.REMOVE_FAVORITE,
      payload: [{ title: 'gifs' }],
    };

    const expected = {
      ...initialState,
      favoriteGifs: initialState.favoriteGifs.filter(item => item !== action.payload)
    };

    expect(gifsReducer(initialState, action)).toEqual(expected);
  });
});
