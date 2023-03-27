import { IMovie } from "../../../types/movieTypes"
import { IBaseActionType } from "../../../types/types"

export interface BackgroundMovieState {
    movie: IMovie
}

export interface BackgroundMovieAction extends IBaseActionType {
    payload: IMovie
}