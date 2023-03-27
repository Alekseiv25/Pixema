import { IMovie } from '../../../types/movie'
import { IBaseActionType } from '../../../types/types'

export interface SelectedMovieState {
    movie: IMovie
}

export interface SelectedMovieAction extends IBaseActionType {
    payload: IMovie
}