import { IObjectStringList, ITokenDto, IUserType } from "../../../types/types"
import { defaultState, GET_TOKEN_FAILED, GET_TOKEN_SUCCESS, GET_USER, PATCH_USER, SIGN_OUT } from "./constants"
import { AuthUserActionType, IAuthState, } from "./types"

export const authReducer = (state: IAuthState = defaultState, action: AuthUserActionType): IAuthState => {
    switch (action.type) {
        case GET_TOKEN_SUCCESS: {
            return {
                ...state,
                tokens: action.payload as ITokenDto,
                errors: null,
            }
        }
        case GET_TOKEN_FAILED: {
            return {
                ...state,
                tokens: null,
                errors: action.payload as IObjectStringList,
            }
        }
        case GET_USER: {
            return {
                ...state,
                user: action.payload as IUserType,
            }
        }
        case SIGN_OUT: {
            return {
                ...state,
                tokens: null,
                errors: null,
                user: null,
            }
        }
        case PATCH_USER: {
            return {
                ...state,
                user: action.payload as IUserType
            }
        }
        default:
            return state
    }
}