import apiUrl from "../apiConfig";
import axios from "axios";


export const createGame = (data, user) => {
    return axios({
        method: 'POST',
        url: apiUrl + '/games',
        data: {
            game: data,
        },
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}

export const gameIndex = (user) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/games'

    })
}

export const gameShow = (user, id) => {
    return axios({
        method: 'GET',
        url: apiUrl + '/games/' + id
    })
}
