import { SEARCH } from '../actions/actionsTypes';

const STATUS = {
  INITIAL: 0,
  UPDATED: 1,
  ACEPTED: 2,
}

export const initialState = {
  currentSearch: '',
  loading: false,
  status: STATUS.INITIAL,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH.SET_CURRENT:
      return { ...state, currentSearch: action.payload };
    case SEARCH.SET_STATUS:
      return { ...state, status: action.payload };
    case SEARCH.LOADING:
      return { ...state, loading: action.payload };
    default:
        return state
  }
}