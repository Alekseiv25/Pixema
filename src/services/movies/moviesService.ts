import { API_KEY } from "../../constants/constants";

export const moviesResponse = (limit: number) => {
    const URL = `https://api.kinopoisk.dev/v1/movie?page=1&limit=${limit}&year=2022-2023&token=${API_KEY}`;
    const request = new Request(URL, {
        method: "GET",
    });

    return fetch(request)
        .then((response) => response.json())
};

export const moviesResponseById = (id: string): Promise<any> => {
    const URL = `https://api.kinopoisk.dev/v1/movie/${id}&token=${API_KEY}`;
    const request = new Request(URL, {
        method: "GET",
    });

    return fetch(request)
        .then((response) => response.json())
}
