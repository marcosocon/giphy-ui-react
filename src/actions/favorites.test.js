import * as actions from './favorites';
import { GIFS } from './actionsTypes';

describe('favorite actions', () => {
  it('should create an action to add favorite', () => {
    const payload = 'My Payload';
    const expectedAction = {
      type: GIFS.ADD_FAVOTITE,
      payload
    };

    expect(actions.addFavorite(payload)).toEqual(expectedAction);
  });
  
  it('should create an action to remove favorite', () => {
    const payload = 'My Payload';
    const expectedAction = {
      type: GIFS.REMOVE_FAVORITE,
      payload
    };

    expect(actions.removeFavorite(payload)).toEqual(expectedAction);
  });
});
