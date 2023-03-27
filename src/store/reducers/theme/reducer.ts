import { IBaseActionType } from '../../../types/types'
import { CHANGE_THEME, defaultValue, } from './constants'
import { IThemeState } from './types'

export const themeReducer = (state: IThemeState = defaultValue, action: IBaseActionType) => {
    switch (action.type) {
        case CHANGE_THEME:
            return {
                ...state,
                themeColor: !state.themeColor,
            }
        default:
            return state
    }
}