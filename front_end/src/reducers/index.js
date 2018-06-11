import { combineReducers } from 'redux';
import movieList from './movieList';
import genreList from './genreList';

let allReducers = combineReducers({
    movies: movieList,
    genre: genreList,
});

export default allReducers;