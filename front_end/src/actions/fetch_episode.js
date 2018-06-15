export const fetch_episode = url => dispatch => {
    fetch(url)
        .then(res => res.json())
        .then(res => dispatch({type: "FETCH_EPISODE", payload: res}))
}