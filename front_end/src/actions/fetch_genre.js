export const fetch_genre = () => (dispatch, getState) => {
    const url = getState().genre.genreNext
    if(url !== null){
        fetch(url)
            .then(res => res.json())
            .then(res => dispatch({type: "FETCH_GENRE", payload: res}))
    }
}