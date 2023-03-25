import { IMovie } from "../../../types/movieTypes";
import { ADD_TO_FAVORITES, DELETE_FROM_FAVORITES } from "./constants";

const addToFavoritesPostsAction = (movie: IMovie) => {
    return {
        type: ADD_TO_FAVORITES,
        payload: movie,
    };
};
const deleteFromFavoritesPostsAction = (id: number | undefined) => {
    return {
        type: DELETE_FROM_FAVORITES,
        payload: id,
    };
};

export {
    addToFavoritesPostsAction,
    deleteFromFavoritesPostsAction,
};