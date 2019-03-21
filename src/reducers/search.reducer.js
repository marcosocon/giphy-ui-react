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
    case 'SET_SEARCH_CURRENT':
      return { ...state, currentSearch: action.payload };
    case 'SET_SEARCH_STATUS':
      return { ...state, status: action.payload };
    case 'LOADING':
      return { ...state, loading: action.payload };
    default:
        return state
  }
}