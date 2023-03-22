export const getUser = async (token: string) => {
    const url = 'https://studapi.teachmeskills.by/auth/users/me/'
    const params = {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        }
    }
    const request = new Request(url, params)
    const response = await fetch(request)
    const result = await response.json()
    return {
        ok: response.ok,
        status: response.status,
        data: result
    }
}

export const patchUser = async (token: string, username: string) => {
    const url = 'https://studapi.teachmeskills.by/auth/users/me/'
    const params = {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            username: username
        })
    }
    const request = new Request(url, params)
    const response = await fetch(request)
    const result = await response.json()
    return {
        ok: response.ok,
        status: response.status,
        data: result
    }
}

export const patchEmail = async (token: string, password: string, email: string) => {
    const url = 'https://studapi.teachmeskills.by/auth/users/set_email/'
    const params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            "current_password": password,
            "new_email": email
        })
    }
    const request = new Request(url, params)
    const response = await fetch(request)
    const result = await response.json()
    return {
        ok: response.ok,
        status: response.status,
        data: result
    }
}

export const patchPassword = async (token: string, current_password: string, new_password: string)  => {
    const url = 'https://studapi.teachmeskills.by/auth/users/set_password/'
    const params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            new_password: new_password,
            current_password: current_password
        })
    }
    const request = new Request(url, params)
    const response = await fetch(request)
    return {
        ok: response.ok,
        status: response.status,
    }
}

export const fetchResetPassword = async (email: string) => {
    const url = 'https://studapi.teachmeskills.by/auth/users/reset_password/'
    const params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "email": email
        })
    }
    const request = new Request(url, params)

    const response = await fetch(request)

    return {
        ok: response.ok,
        status: response.status,
    }
}

export const fetchNewPassword = async (uid: string, token: string, new_password: string,) => {
    const url = 'https://studapi.teachmeskills.by/auth/users/reset_password_confirm/'
    const params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "uid": uid,
            "token": token,
            "new_password": new_password
        })
    }
    const request = new Request(url, params)
    const response = await fetch(request)
    return {
        ok: response.ok,
        status: response.status,
    }
}

export const fetchRefreshToken = async (refreshToken: string) => {
    const url = 'https://studapi.teachmeskills.by/auth/jwt/refresh/'
    const params = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            "refresh": refreshToken
        })
    }
    const request = new Request(url, params)

    const response = await fetch(request)
    const result = await response.json()

    return {
        ok: response.ok,
        status: response.status,
        data: result
    }
}