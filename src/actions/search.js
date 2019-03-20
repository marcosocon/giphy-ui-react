import serviceFetch from '../services/fetch';
import { loading } from './loader';
import {
  API_KEY,
  API_URL 
} from './../config/index';

export function setStatus(payload) {
  return {
    type: 'SET_SEARCH_STATUS',
    payload,
  }
}

export function setLoadingStatus(payload) {
  return {
    type: 'SET_SEARCH_LOADING_STATUS',
    payload,
  }
}

export function setCurrentSearch(payload) {
  return {
    type: 'SET_SEARCH_CURRENT',
    payload,
  }
}

export function setFindedGifs(payload) {
  return {
    type: 'SET_FINDED_GIFS',
    payload,
  }
}

export function fetchSearchedGifs(qs) {
  const max = 10;
  return dispatch => {
    const url = `${API_URL}search?api_key=${API_KEY}&q${qs}&limit=${max}`;
    dispatch(loading(true));
    return serviceFetch.get(url)
      .then((items) => {
        dispatch(loading(false));
        dispatch(setFindedGifs(items.data))
      });
  }
}

export function fetchOptionsGifts(qs) {
  const max = 10;
  console.log({ qs });
  return dispatch => {
    const url = `${API_URL}search?api_key=${API_KEY}&q=${qs}&limit=${max}`;
    console.log({ url });
    dispatch(setLoadingStatus(true));
    dispatch(setCurrentSearch(qs));
    dispatch(setStatus(1));
    return serviceFetch.get(url)
      .then((items) => {
        dispatch(setLoadingStatus(false));
        dispatch(setFindedGifs(items.data))
      });
  }
}