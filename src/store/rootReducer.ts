import { combineReducers } from "redux";
import burgerMenuReducer from "./reducers/toggleBurgerReducer/reducer";

const rootReducer = combineReducers({
    toggleBurger: burgerMenuReducer
})

export default rootReducer