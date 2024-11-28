const url = 'http://127.0.0.1:8000'
const loginUrl = url + '/login'

export const login = async (username: string, password: string) => {
    const response = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
    })
    const data = await response.json()
    return data
}
