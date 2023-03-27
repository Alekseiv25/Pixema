import { defaultValue, LOAD_BACKGROUND_MOVIE } from './constants'
import { BackgroundMovieAction, BackgroundMovieState } from './types'

const backgroundMovieReducer = (state: BackgroundMovieState = defaultValue, action: BackgroundMovieAction): BackgroundMovieState => {
    switch (action.type) {
        case LOAD_BACKGROUND_MOVIE:
            return {
                ...state,
                movie: action.payload,
            }
        default:
            return state
    }
}

export default backgroundMovieReducer