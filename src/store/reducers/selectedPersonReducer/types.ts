import { IPerson } from "../../../types/person";
import { IBaseActionType } from "../../../types/types";

export interface SelectedPersonState {
    person: IPerson
}

export interface SelectedPersonAction extends IBaseActionType {
    payload: IPerson
}