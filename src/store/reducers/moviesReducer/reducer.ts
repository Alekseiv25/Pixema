import { IData } from "../../../types/data";
import { defaultvalue, LOAD_MOVIES } from "./constants";
import {  IMoviesListAction } from "./types";

const moviesListReducer = (state: IData = defaultvalue, action: IMoviesListAction): IData => {
    switch (action.type) {
        case LOAD_MOVIES:
            return {
                ...state,
                docs: action.payload.docs,
                total: action.payload.total,
                limit: action.payload.limit,
                page: action.payload.page,
                pages: action.payload.pages,
            }
        default:
            return state
    }
}

export default moviesListReducer