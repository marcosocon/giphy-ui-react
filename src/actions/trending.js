import serviceFetch from '../services/fetch';
import { loading } from './search';
import { GIFS } from './actionsTypes';
import {
  API_KEY,
  API_URL 
} from './../config/index';

export function setTrendingGifs(payload) {
  return {
    type: GIFS.SET_TRENDING,
    payload
  };
};

export function fetchTrendingGifs() {
  const max = 10;
  return (dispatch) => {
    dispatch(loading(true));
    const url = `${API_URL}trending?api_key=${API_KEY}&limit=${max}`;
    return serviceFetch.get(url)
      .then((items) => {
        dispatch(loading(false));
        dispatch(setTrendingGifs(items.data));
      });
  };
};