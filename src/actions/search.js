import serviceFetch from '../services/fetch';
import { GIFS, SEARCH } from './actionsTypes';
import {
  API_KEY,
  API_URL 
} from './../config/index';

export function setStatus(payload) {
  return {
    type: SEARCH.SET_STATUS,
    payload,
  }
}

export function setCurrentSearch(payload) {
  return {
    type: SEARCH.SET_CURRENT,
    payload,
  }
}

export function setFindedGifs(payload) {
  return {
    type: GIFS.SET_FINDED,
    payload,
  }
}

export function loading(payload) {
  return {
    type: SEARCH.LOADING,
    payload
  }
}

export function fetchGifsByKeyword(keyword) {
  const max = 20;
  return dispatch => {
    const url = `${API_URL}search?api_key=${API_KEY}&q=${keyword}&limit=${max}`;
    dispatch(setCurrentSearch(keyword));
    dispatch(setStatus(1));
    dispatch(loading(true));
    
    return serviceFetch.get(url)
    .then((items) => {
        dispatch(setFindedGifs(items.data));
        dispatch(setStatus(2));
        dispatch(loading(false));
      });
  }
}