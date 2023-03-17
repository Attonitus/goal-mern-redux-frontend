export const GLOBAL_URL = 'http://localhost:5000/api/v1'

//Register user
export const register = async(user) => {
    const response = await fetch(`${GLOBAL_URL}/users/login`, {
        method: 'POST',
        body: user
    })
    const json = await response.json()
    if(json.errors){
        return json.errors
    }
    localStorage.setItem('user', JSON.stringify(json.user))
    localStorage.setItem('token', JSON.stringify(json.token))
    return json
}


export const registerTrue = async(data) => {
    const response = await fetch(`${GLOBAL_URL}/users/register`, {
        method: 'POST',
        body: data
    })

    const json = await response.json()
    return json
}

export const logout = () => {
    localStorage.clear()
}