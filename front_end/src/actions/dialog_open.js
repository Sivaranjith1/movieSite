export const dialog_open = (genreID, index, isMovie) => dispatch => {
    dispatch({type: "DIALOG_OPEN", payload:[genreID, index, isMovie]})
}