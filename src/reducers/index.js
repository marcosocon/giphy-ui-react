import { combineReducers } from 'redux';
import gifsReducer from './gifs.reducer';
import searchReducer from './search.reducer';

export default combineReducers({
    gifsReducer,
    searchReducer,
});
