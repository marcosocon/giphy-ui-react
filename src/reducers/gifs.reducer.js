const initialState = {
    trendingGifs: [],
    favoriteGifs: [],
    searchResultGifs: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TRENDING_GIFS':
            return {...state, trendingGifs: action.payload};
        default:
            return state
    }
}