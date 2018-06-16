const fetching = dispatch => {
    dispatch({type:"FETCHING"})
}


export const fetch_genre = () => (dispatch, getState) => {
    const url = getState().genre.genreNext
    fetching(dispatch)
    if(url !== null){
        fetch(url)
            .then(res => res.json())
            .then(res => dispatch({type: "FETCH_GENRE", payload: res}))
    }
}