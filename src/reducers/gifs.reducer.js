export const initialState = {
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
        case 'ADD_FAVORITE':
            return { ...state, favoriteGifs: [...state.favoriteGifs, action.payload] };
        case 'REMOVE_FAVORITE':
            return { ...state, favoriteGifs: state.favoriteGifs.filter(item => item !== action.payload) };
        default:
            return state
    }
}