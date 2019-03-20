const initialState = {
    trendingGifs: [],
    favoriteGifs: [],
    searchResultGifs: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRENDING_GIFS':
            return { ...state, trendingGifs: action.payload };
        case 'SET_FINDED_GIFS':
            return { ...state, searchResultGifs: action.payload };
        default:
            return state
    }
}