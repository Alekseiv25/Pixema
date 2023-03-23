import { GlobalState } from '../store'

export const toggleBurgerSelector = (state: GlobalState) => state.toggleBurger.isOpen
export const changeThemeSelector = (state: GlobalState) => state.changeTheme.themeColor
export const authSelector = (state: GlobalState) => state.auth
export const userSelector = (state: GlobalState) => state.auth.user
export const registerSelector = (state: GlobalState) => state.register
export const moviesSelector = (state: GlobalState) => state.movies.docs
export const selectedMovieSelector = (state: GlobalState) => state.selectedMovie.movie