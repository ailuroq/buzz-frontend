import {GET_USER} from "../constants/actionTypes";
import axios from "../axios/axios";

const _getUser = (user) => ({
    type: GET_USER,
    user
});

export const getUser = (id) => {
    return (dispatch) => {
        return axios.get('/profile/${id}').then(result => {
            const user = []

            result.data.forEach(item => {
                user.push(item)
            })

            dispatch(_getUser(user))
        })
    }
}