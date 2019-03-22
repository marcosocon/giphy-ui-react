import { GIFS } from '../actions/actionsTypes';

export const initialState = {
    trendingGifs: [],
    favoriteGifs: [],
    searchResultGifs: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GIFS.SET_TRENDING:
            return { ...state, trendingGifs: action.payload };
        case GIFS.SET_FINDED:
            return { ...state, searchResultGifs: action.payload };
        case GIFS.ADD_FAVOTITE:
            return { ...state, favoriteGifs: [...state.favoriteGifs, action.payload] };
        case GIFS.REMOVE_FAVORITE:
            return { ...state, favoriteGifs: state.favoriteGifs.filter(item => item !== action.payload) };
        default:
            return state
    }
}