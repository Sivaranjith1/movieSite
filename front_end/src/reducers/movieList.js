const initialState = {
    count: 0,
    movies: [],
    serie: [],
}

export default function (state=initialState, action) {
    switch(action.type) {
        case 'FETCH_MOVIE':
            return {...state, movies: [
                ...state.movies, ...action.payload
            ]};

        case 'FETCH_SERIE':
            return {...state, serie: [
                ...state.serie, ...action.payload
            ]}

        default:
            return state;
    }
}