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
        case 'FETCH_MOVIE':
            return {...state,
                movieCount: action.payload.count,
                moviePageNext: action.payload.next,
                movies: [
                    ...state.movies, ...action.payload.results
            ]};

        case 'FETCH_SERIE':
            return {...state,
                serieCount: action.payload.count,
                seriePageNext: action.payload.next,
                serie: [
                    ...state.serie, ...action.payload.results
            ]}

        default:
            return state;
    }
}