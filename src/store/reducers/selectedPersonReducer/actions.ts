import { personResponseById } from "../../../services/movies/moviesService"
import { IPerson } from "../../../types/person"
import { GlobalDispatch } from "../../store"
import { LOAD_SELECTED_PERSON } from "./constants"
import { SelectedPersonAction } from "./types"

export const loadSelectedPersonAction = (person: IPerson): SelectedPersonAction => {
    return {
        type: LOAD_SELECTED_PERSON,
        payload: person
    }
}

export const loadSelectedPersonAsyncAction = (id: string | undefined): any => {
    return (dispatch: GlobalDispatch) => {
        personResponseById(id).then((person: IPerson) => dispatch(loadSelectedPersonAction(person)))
    }
}

