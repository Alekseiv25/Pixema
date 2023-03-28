import { movieFilter, moviesPersonResponseById, moviesResponse, moviesResponseBySearch } from '../../../services/moviesService'
import { IData } from '../../../types/data'
import { GlobalDispatch } from '../../store'
import { LOAD_MOVIES } from './constants'
import { IMoviesListAction } from './types'

export const loadMoviesAction = (movies: IData): IMoviesListAction => {
    return {
        type: LOAD_MOVIES,
        payload: movies,
    }
}

export const loadMoviesAsyncAction = (limit: number): any => {
    return (dispatch: GlobalDispatch): any => {
        moviesResponse(limit).then((movies: IData) =>
            dispatch(loadMoviesAction(movies)))
    }
}

export const loadMoviesByIdAsyncAction = (limit: number, query: string): any => {
    return (dispatch: GlobalDispatch): any => {
        moviesPersonResponseById(limit, query).then((movies: IData) =>
            dispatch(loadMoviesAction(movies)))
    }
}

export const loadMoviesBySearchAsyncAction = (limit: number, query: string | undefined): any => {
    return (dispatch: GlobalDispatch): any => {
        moviesResponseBySearch(limit, query).then((movies: IData) =>
            dispatch(loadMoviesAction(movies)))
    }
}

export const loadMoviesByfilterAsyncAction = (query: string, limit: number): any => {
    return (dispatch: GlobalDispatch): any => {
        movieFilter(query, limit).then((movies: IData) =>
            dispatch(loadMoviesAction(movies)))
    }
}

