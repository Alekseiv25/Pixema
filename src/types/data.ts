import { IMovie, IMoviePerson } from "./movieTypes";

export interface IData {
    docs: IMovie[];
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}

export interface IDataPerson {
    docs: IMoviePerson[];
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}