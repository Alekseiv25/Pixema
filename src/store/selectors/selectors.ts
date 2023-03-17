import { GlobalState } from '../store'

export const toggleBurgerSelector = (state: GlobalState) => state.toggleBurger.isOpen
export const changeThemeSelector = (state: GlobalState) => state.changeTheme.themeColor