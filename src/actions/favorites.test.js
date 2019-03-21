import * as actions from './favorites';

describe('favorite actions', () => {
  it('should create an action to add favorite', () => {
    const payload = 'My Payload';
    const expectedAction = {
      type: "ADD_FAVORITE",
      payload
    };

    expect(actions.addFavorite(payload)).toEqual(expectedAction);
  });
  
  it('should create an action to remove favorite', () => {
    const payload = 'My Payload';
    const expectedAction = {
      type: "REMOVE_FAVORITE",
      payload
    };

    expect(actions.removeFavorite(payload)).toEqual(expectedAction);
  });
});