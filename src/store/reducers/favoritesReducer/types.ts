import { IData } from "../../../types/data";
import { IMovie } from "../../../types/movieTypes";
import { IBaseActionType } from "../../../types/types";

interface IFavoriteActionType extends IBaseActionType {
    payload: IMovie | IData[] | number;
}

interface IFavoriteType {
    id: number;
    favoritesMovies: IMovie[];
}

interface IFavoriteListState {
    favoritesMovies: IMovie[];
}

export type {
    IFavoriteActionType,
    IFavoriteType,
    IFavoriteListState,
};