const initialState = {
    movieCount: 0,
    serieCount: 0,
    movies: [],
    moviePageNext: null,
    serie: [],
    seriePageNext: null,
}

export default function (state=initialState, action) {
    switch(action.type) {
        default:
            return state;
    }
}