export function addFavorite(payload) {
  return {
    type: "ADD_FAVORITE",
    payload
  };
}

export function removeFavorite(payload) {
  return {
    type: "REMOVE_FAVORITE",
    payload
  };
}
