import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer/reducer";
import favoriteReducer from "./reducers/favoritesReducer/reducer";
import moviesListReducer from "./reducers/moviesReducer/reducer";
import registerReducer from "./reducers/registerReducer/reducer";
import { resetReducer } from "./reducers/resetReducer/reducer";
import selectedMovieReducer from "./reducers/selectedMovieReducer/reducer";
import { selectedPersonReducer } from "./reducers/selectedPersonReducer/reducer";

import { themeReducer } from "./reducers/themeReducer/reducer";
import burgerMenuReducer from "./reducers/toggleBurgerReducer/reducer";
import toggleFilterReducer from "./reducers/toggleFilter/reducer";

const rootReducer = combineReducers({
    toggleBurger: burgerMenuReducer,
    changeTheme: themeReducer,
    register: registerReducer,
    auth: authReducer,
    reset: resetReducer,
    movies: moviesListReducer,
    selectedMovie: selectedMovieReducer,
    selectedPerson: selectedPersonReducer,
    favoritesMovies: favoriteReducer,
    toggleFilter: toggleFilterReducer
})

export default rootReducer