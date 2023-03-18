import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer/reducer";
import registerReducer from "./reducers/registerReducer/reducer";
import { resetReducer } from "./reducers/resetReducer/reducer";
import { themeReducer } from "./reducers/themeReducer/reducer";
import burgerMenuReducer from "./reducers/toggleBurgerReducer/reducer";

const rootReducer = combineReducers({
    toggleBurger: burgerMenuReducer,
    changeTheme: themeReducer,
    register: registerReducer,
    auth: authReducer,
    reset: resetReducer
})

export default rootReducer