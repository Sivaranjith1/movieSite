export const fetch_video = (url) => dispatch => {
    fetch(url)
        .then(res => res.json())
        .then(res => dispatch({type: "FETCH_VIDEO", payload: res}))
}