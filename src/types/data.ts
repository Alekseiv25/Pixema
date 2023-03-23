import { IMovie } from "./movieTypes";

export interface IData {
    docs: IMovie[];
    total?: number;
    limit?: number;
    page?: number;
    pages?: number;
}