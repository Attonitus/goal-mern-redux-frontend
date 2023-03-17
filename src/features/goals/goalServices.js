import { GLOBAL_URL } from "../auth/authServices"

export const createGoalFuction = async(goal, token) => {
    const response = await fetch(`${GLOBAL_URL}/goals`, {
        method: 'POST',
        body: goal,
        headers: {
            'authorization': token
        }
    })
    const json = await response.json()
    return json
}

export const getGoalsFuction = async(token) => {
    const response = await fetch(`${GLOBAL_URL}/goals/profile/me`, {
        headers: {
            'authorization': token
        }
    })
    const json = await response.json()
    return json
}

export const deleteGoalFuction = async(id, token) => {
    const response = await fetch(`${GLOBAL_URL}/goals/${id}`, {
        method: 'DELETE',
        headers: {
            'authorization': token
        }
    })
    const json = await response.json()
    return json
}