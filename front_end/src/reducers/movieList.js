const initialState = {
    count: 0,
    movies: []
}

export default function (state=initialState, action) {
    switch(action.type) {
        case 'PLACEHOLDER':
            return state;

        default:
            return state;
    }
}