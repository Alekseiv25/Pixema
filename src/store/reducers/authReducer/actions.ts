import getTokensUser from "../../../services/auth/authService"
import { fetchRefreshToken, getUser, patchUser } from "../../../services/user/userService"
import { IBaseActionType, IObjectStringList, ITokenDto, IUserType } from "../../../types/types"
import { GlobalDispatch, GlobalState } from "../../store"
import { GET_TOKEN_FAILED, GET_TOKEN_SUCCESS, GET_USER, SIGN_OUT } from "./constants"
import { AuthUserActionType } from "./types"

export const getTokensSuccessAction = (
    tokens: ITokenDto
): AuthUserActionType => {
    return {
        type: GET_TOKEN_SUCCESS,
        payload: tokens,
    }
}

export const getTokensFailedAction = (
    errors: IObjectStringList
): AuthUserActionType => {
    return {
        type: GET_TOKEN_FAILED,
        payload: errors,
    }
}

export const getTokensAsyncAction = (email: string, password: string): any => {
    return async (dispatch: GlobalDispatch) => {
        const result = await getTokensUser(email, password)
        if (result.ok) {
            dispatch(getTokensSuccessAction(result.data))
        } else {
            dispatch(getTokensFailedAction(result.data))
        }
    }
}

export const refreshTokenAsyncAction = (): any => {
    return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
        const refreshToken = getState().auth.tokens?.refresh
        if (!refreshToken) {
            console.log('No refreshToken')
            throw new Error()
        }

        const result = await fetchRefreshToken(refreshToken)
        if (result.ok) {
            dispatch(getTokensSuccessAction({
                access: result.data.access,
                refresh: refreshToken
            }))
        }
    }
}

export const getUserAction = (user: IUserType) => {
    return {
        type: GET_USER,
        payload: user
    }
}

export const getUserAsyncAction = (email: string, password: string, cb: () => void): any => {
    return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
        await dispatch(getTokensAsyncAction(email, password))
        const userData = getState().auth.user?.username
        let accessToken = getState().auth.tokens?.access
        let refreshToken = getState().auth.tokens?.refresh
        const errors = getState().auth.errors

        if (!refreshToken) {
            if (errors) {
                return
            }
            await dispatch(getTokensAsyncAction(email, password))
            await dispatch(getUserAsyncAction(email, password, cb))
        } else if (!accessToken) {
            await dispatch(refreshTokenAsyncAction())
            await dispatch(getUserAsyncAction(email, password, cb))
        } else if (userData === undefined) {
            const userInfo = await getUser(accessToken!)
            dispatch(getUserAction(userInfo.data))
            cb()
        }
    }
}

export const patchUserAsyncAction = (username: string): any => {
    return async (dispatch: GlobalDispatch, getState: () => GlobalState) => {
        let accessToken = getState().auth.tokens?.access

        if (!accessToken) {
            throw new Error('no Access Token')
        }
        const result = await patchUser(accessToken, username)


        if (result.ok) {
            const userInfo = await getUser(accessToken)
            dispatch(getUserAction(userInfo.data))
            console.log(result.data);
        } else if (result.status === 401) {
            await dispatch(refreshTokenAsyncAction())
            console.log('refresh token');
            await dispatch(patchUserAsyncAction(username))
        } else {
            console.log(result.data);
        }
    }
}


export const signOutAction = (): IBaseActionType => {
    return {
        type: SIGN_OUT
    }
}