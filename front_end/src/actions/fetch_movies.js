export const fetch_movies = () => dispatch => {
    fetch('http://127.0.0.1.xip.io:8000/movie/all')
    .then(res => res.json())
    .then(res => dispatch({type: "FETCH_MOVIE", payload: res}))
}