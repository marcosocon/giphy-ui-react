import {
  API_KEY,
  API_URL 
} from './../config/index';

export function setTrendingGifs(payload) {
  return {
    type: 'SET_TRENDING_GIFS',
    payload
  };
};

export function fetchTrendingGifs() {
  const max = 10;
  return (dispatch) => {
    const url = `${API_URL}trending?api_key=${API_KEY}&limit=${max}`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(setTrendingGifs(items.data)))
  };
};