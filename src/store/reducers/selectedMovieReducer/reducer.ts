import { defaultValue, LOAD_SELECTED_MOVIE } from "./constants";
import { SelectedMovieAction, SelectedMovieState } from "./types";

const selectedMovieReducer = (state: SelectedMovieState = defaultValue, action: SelectedMovieAction): SelectedMovieState => {
    switch (action.type) {
        case LOAD_SELECTED_MOVIE:
            return {
                ...state,
                movie: action.payload
            }
        default:
            return state
    }
}

export default selectedMovieReducer