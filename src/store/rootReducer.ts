import { combineReducers } from "redux";
import { themeReducer } from "./reducers/themeReducer/reducer";
import burgerMenuReducer from "./reducers/toggleBurgerReducer/reducer";

const rootReducer = combineReducers({
    toggleBurger: burgerMenuReducer,
    changeTheme: themeReducer
})

export default rootReducer