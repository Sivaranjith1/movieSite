const initialState = {
    open: false,
    context: {},
    episode: 0,
    isSerie: false, 
}

export default function (state=initialState, action) {
    switch(action.type){
        case "FETCH_VIDEO":
            return {
                ...state,
                open: true,
                context: action.payload,
            }

        case "FETCH_EPISODE":
            return {
                ...state,
                isSerie: true, 
                context: {
                    ...state.context,
                    episode: {
                        ...state.context.episode,
                        [action.payload.episode_number - 1]: action.payload 
                    }
                }
            }

        case "IS_SERIE":
            return {
                ...state,
                isSerie: true,
            }

        case "CLOSE_VIDEO":
            return {
                ...state,
                open: false,
                isSerie: false, 
            }    

        case "CHANGE_EPISODE":
            return {
                ...state,
                episode: action.payload
            }
            
        default:
            return state;
    }
}