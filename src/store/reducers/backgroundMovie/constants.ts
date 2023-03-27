import { IMovie } from "../../../types/movieTypes"
import { BackgroundMovieState } from "./types"

export const LOAD_BACKGROUND_MOVIE = "LOAD_BACKGROUND_MOVIE"
export const defaultValue: BackgroundMovieState = {
    movie: {} as IMovie
} 