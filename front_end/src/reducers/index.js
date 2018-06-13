import { combineReducers } from 'redux';
import movieList from './movieList';
import genreList from './genreList';
import videoList from './videoList';

let allReducers = combineReducers({
    movies: movieList,
    genre: genreList,
    video: videoList,
});

export default allReducers;