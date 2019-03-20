const STATUS = {
  INITIAL: 0,
  UPDATED: 1,
  ACEPTED: 2,
}

const initialState = {
  currentSearch: '',
  loading: false,
  status: STATUS.INITIAL,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TRENDING_GIFS':
        return { ...state, trendingGifs: action.payload };
    case 'SET_FINDED_GIFS':
      return { ...state, searchResultGifs: action.payload };
    case 'SET_SEARCH_CURRENT':
      return { ...state, currentSearch: action.payload };
    case 'SET_SEARCH_STATUS':
      return { ...state, status: action.payload };
    default:
        return state
  }
}