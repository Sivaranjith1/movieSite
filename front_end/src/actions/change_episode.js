import {fetch_episode} from './fetch_episode'
export const next_episode = () => (dispatch, getState) => {
    let length = Object.keys(getState().video.context.episode).length - 1
    let newEps = getState().video.episode + 1
    if(newEps <= length){
        dispatch({type:"CHANGE_EPISODE", payload: newEps})
        if(!getState().video.context.episode[newEps].video) {
            dispatch(fetch_episode(getState().video.context.episode[newEps].url))
        }   
    }
}

export const prev_episode = () => (dispatch, getState) => {
    let newEps = getState().video.episode - 1
    if(newEps >= 0){
        dispatch({type:"CHANGE_EPISODE", payload: newEps})
    }
}