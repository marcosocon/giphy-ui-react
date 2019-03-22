import { GIFS } from "./actionsTypes";
export function addFavorite(payload) {
  return {
    type: GIFS.ADD_FAVOTITE,
    payload
  };
}

export function removeFavorite(payload) {
  return {
    type: GIFS.REMOVE_FAVORITE,
    payload
  };
}
