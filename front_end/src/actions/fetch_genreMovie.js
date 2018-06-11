export const fetch_genreMovie = url => dispatch => {
    //console.log(url, pk)
    fetch(url)
    .then(res => res.json())
    .then(res => dispatch({type: "FETCH_GENREMOVIE", payload: res}))
}