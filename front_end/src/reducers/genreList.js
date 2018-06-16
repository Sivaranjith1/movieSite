import { url } from '../config'
const initialState = {
    openDialog: false,
    fetching: false,
    count: 0,
    dialogContext: {},
    genreNext: `${url}/movie/genre/`,
    genre: [],
    genreMovie: {},
    genreSerie: {},
}

export default function (state=initialState, action) {
    switch(action.type){
        case "FETCHING":
            return {
                ...state,
                fetching: true,
            }

        case "FETCH_GENRE":
            return {
                ...state,
                genreNext: action.payload.next,
                fetching: false,
                count: action.payload.count,
                genre: [
                    ...state.genre, ...action.payload.results
                ]
            }

        case "FETCH_GENREMOVIE":
            let oldMoviePK = state.genreMovie[action.payload.pk] ? state.genreMovie[action.payload.pk] : []
            let oldSeriePK = state.genreSerie[action.payload.pk] ? state.genreSerie[action.payload.pk] : []
            return {
                ...state,
                genreMovie: {
                    ...state.genreMovie,
                    [action.payload.pk]: [...oldMoviePK, ...action.payload.movieGenre]
                },
                genreSerie: {
                    ...state.genreSerie, 
                    [action.payload.pk]: [...oldSeriePK, ...action.payload.serieGenre],
                }
            }

        case "DIALOG_OPEN":
            let genreId = action.payload[0]
            let index = action.payload[1]
            let requestFrom = action.payload[2] ? state.genreMovie : state.genreSerie
            return {
                ...state,
                openDialog: true,
                dialogContext: requestFrom[genreId][index]
            }

        case "DIALOG_CLOSE":
            return {
                ...state,
                openDialog: false,
            }

        case "CLEAN_GENRE":
            return {
                ...initialState
            }

        case "URL_MOVIE":
            return {
                ...initialState,
                genreNext: `${url}/movie/genreMovie/`,
            }

        case "URL_SERIE":
        return {
            ...initialState,
            genreNext: `${url}/movie/genreSerie/`,
        }

        case "URL_GENRE":
        return {
            ...initialState,
            genreNext: `${url}/movie/genre/`,
        }

        default:
            return state;
    }
}