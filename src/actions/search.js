import serviceFetch from '../services/fetch';
import { loading } from './loader';
import {
  API_KEY,
  API_URL 
} from './../config/index';

export function setCurrentSearch(payload) {
  return {
    type: 'SET_CURRENT_SEARCH',
    payload,
  }
}

export function setFindedGifs(payload) {
  return {
    type: 'SET_FINDED_GIFS',
    payload,
  }
}

export function fetchOptionsBySearch(qs) {
  const max = 10;
  return dispatch => {
    const url = `${API_URL}search?api_key=${API_KEY}&q${qs}&limit=${max}`;
    dispatch(loading(true));
    return serviceFetch(url)
      .then((items) => {
        dispatch(loading(false));
        dispatch(setFindedGifs(items.data))
      });
  }
}