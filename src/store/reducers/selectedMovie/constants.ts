import { IMovie } from '../../../types/movie'
import { SelectedMovieState } from './types'

export const LOAD_SELECTED_MOVIE = 'LOAD_SELECTED_MOVIE'
export const defaultValue: SelectedMovieState = {
    movie: {} as IMovie
} 