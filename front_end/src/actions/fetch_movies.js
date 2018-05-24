import { url } from '../config';

export const fetch_movies = () => dispatch => {
    fetch(`${url}/movie/all`)
    .then(res => res.json())
    .then(res => dispatch({type: "FETCH_MOVIE", payload: res}))
}