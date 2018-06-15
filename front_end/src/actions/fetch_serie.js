import {fetch_episode} from './fetch_episode'
import {is_serie} from './is_serie'
export const fetch_serie = (url) => dispatch => {
    fetch(url)
        .then(res => res.json())
        .then(res => {
            is_serie(dispatch)
            dispatch({type: "FETCH_VIDEO", payload: res})
            dispatch(fetch_episode(res.episode[0].url))
        })
}