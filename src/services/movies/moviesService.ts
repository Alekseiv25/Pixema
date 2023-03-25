import { API_KEY } from "../../constants/constants";

export const moviesResponse = (limit: number) => {
    const URL = `https://api.kinopoisk.dev/v1/movie?page=1&limit=${limit}&year=2022-2023`;
    const request = new Request(URL, {
        method: "GET",
        headers: {
            "X-API-KEY": `${API_KEY}`,
        },
    });

    return fetch(request)
        .then((response) => response.json())
};

export const moviesResponseById = (id: string | undefined): Promise<any> => {
    const URL = `https://api.kinopoisk.dev/v1/movie/${id}`;
    const request = new Request(URL, {
        method: "GET",
        headers: {
            "X-API-KEY": `${API_KEY}`,
        },
    });

    return fetch(request)
        .then((response) => response.json())
}

export const moviesPersonResponseById = (limit: number, query: string | undefined): Promise<any> => {
    const URL = `https://api.kinopoisk.dev/v1/movie?${query}&limit=${limit}`;
    const request = new Request(URL, {
        method: "GET",
        headers: {
            "X-API-KEY": `${API_KEY}`,
        },
    });

    return fetch(request)
        .then((response) => response.json())
}

export const personResponseById = (id: string | undefined): Promise<any> => {
    const URL = `https://api.kinopoisk.dev/v1/person/${id}`
    const request = new Request(URL, {
        method: "GET",
        headers: {
            "X-API-KEY": `${API_KEY}`
        }
    })

    return fetch(request)
        .then((response) => response.json())
}

export const moviesResponseBySearch = (limit: number, query: string | undefined): Promise<any> => {
    const URL = `https://api.kinopoisk.dev/v1/movie?search=${query}&field=name&limit=${limit}`
    const request = new Request(URL, {
        method: "GET",
        headers: {
            "X-API-KEY": `${API_KEY}`
        }
    })

    return fetch(request)
        .then((response) => response.json())
}
