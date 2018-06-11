import { url } from '../config'
const initialState = {
    genreNext: `${url}/movie/genre/`,
    genre: [],
    genreMovie: [],
    genreSerie: [],
}

export default function (state=initialState, action) {
    switch(action.type){
        case "FETCH_GENRE":
            return {
                ...state,
                genreNext: action.payload.next,
                genre: [
                    ...state.genre, ...action.payload.results
                ]
            }
        default:
            return state;
    }
}