const initialState = {
    open: false,
    small: false,
    context: {},
}

export default function (state=initialState, action) {
    switch(action.type){
        case "FETCH_VIDEO":
            return {
                ...state,
                open: true,
                context: action.payload,
            }

        case "CLOSE_VIDEO":
            return {
                ...state,
                open: false
            }    

        default:
            return state;
    }
}