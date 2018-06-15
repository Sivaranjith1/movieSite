import { url } from '../config';

export const fetch_serie = () => dispatch => {
    fetch(`${url}/movie/serie`)
    .then(res => res.json())
    .then(res => dispatch({type: "FETCH_SERIE", payload: res}))
}