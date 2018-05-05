import { combineReducers } from 'redux';
import movieList from './movieList';

let allReducers = combineReducers({
    movies: movieList,
});

export default allReducers;