import { IBaseActionType, IObjectStringList, ITokenDto, IUserType } from '../../../types/types'

interface IAuthState {
    tokens: ITokenDto | null
    errors: IObjectStringList | null
    user: IUserType | null
}

interface AuthUserActionType extends IBaseActionType {
    payload: ITokenDto | IObjectStringList | IUserType
}

export type { IAuthState, AuthUserActionType }