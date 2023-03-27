import { randomMovie } from '../../../services/moviesService'
import { IMovie } from '../../../types/movie'
import { GlobalDispatch } from '../../store'
import { LOAD_BACKGROUND_MOVIE } from './constants'
import { BackgroundMovieAction } from './types'

export const loadBackgroundMovieAction = (movie: IMovie): BackgroundMovieAction => {
    return {
        type: LOAD_BACKGROUND_MOVIE,
        payload: movie
    }
}

export const loadBackgroundMovieAsyncAction = (): any => {
    return (dispatch: GlobalDispatch) => [
        randomMovie().then((movie: IMovie) => dispatch(loadBackgroundMovieAction(movie)))
    ]
}
