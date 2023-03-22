import { IMovie } from "../../types/movieTypes";

export const getMovies = async (key: string, limit: number) => {
    const url = `https://api.kinopoisk.dev/v1/movie?limit=${limit}&token=${key}`;
    const params = {
        method: "GET",
        headers: {
            "Content-type": "application/json",
        },
    };
    const request = new Request(url, params);
    const response = await fetch(request);
    const result: IMovie = await response.json();
    return {
        ok: response.ok,
        status: response.status,
        data: result,
    };
};