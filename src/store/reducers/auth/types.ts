import { IBaseActionType, IObjectStringList, ITokenDto, IUserType } from '../../../types/types'

export interface IAuthState {
    tokens: ITokenDto | null
    errors: IObjectStringList | null
    user: IUserType | null
}

export interface AuthUserActionType extends IBaseActionType {
    payload: ITokenDto | IObjectStringList | IUserType
}

