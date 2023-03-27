import { activateUser, registerUser } from '../../../services/registerService'
import { IObjectStringList, IUserType } from '../../../types/types'
import { GlobalDispatch } from '../../store'
import {
    ACTIVATION_FAILED,
    ACTIVATION_SUCCESS,
    REGISTRATION_FAILED,
    REGISTRATION_SUCCESS,
} from './constants'
import {
    ILoadUserRegisterActionType,
} from './types'

export const loadUserRegisterAction = (
    user: IUserType
): ILoadUserRegisterActionType => {
    return { type: REGISTRATION_SUCCESS, payload: user }
}

export const errorRegistrationUserAction = (errors: IObjectStringList) => {
    return {
        type: REGISTRATION_FAILED,
        payload: errors,
    }
}

export const registerUserAsyncAction = (
    username: string,
    email: string,
    password: string,
    cb: () => void
): any => {
    return async (dispatch: GlobalDispatch) => {
        const result = await registerUser(username, email, password)
        if (result.ok) {
            dispatch(loadUserRegisterAction(result.data as IUserType))
            cb()
        } else {
            dispatch(errorRegistrationUserAction(result.data))
        }
    }
}

export const activationSuccessAction = (): ILoadUserRegisterActionType => {
    return {
        type: ACTIVATION_SUCCESS,
        payload: {}
    }
}

export const activationFailedAction = (
    errors: IObjectStringList
): ILoadUserRegisterActionType => {
    return {
        type: ACTIVATION_FAILED,
        payload: errors
    }
}

export const activateUserAsyncAction = (
    uid: string,
    token: string,
    cb: () => void
): any => {
    return async (dispatch: GlobalDispatch) => {
        const result = await activateUser(uid, token)

        if (result.status === 204) {
            dispatch(activationSuccessAction())
            cb()
        } else {
            dispatch(activationFailedAction(result.data))
        }
    }
}


