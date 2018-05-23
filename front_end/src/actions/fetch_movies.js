export const fetch_movies = () => dispatch => {
    fetch('http://localhost:8000/movie/all')
    .then(res => res.json())
    .then(res => dispatch({type: "FETCH_MOVIE", payload: res}))
}