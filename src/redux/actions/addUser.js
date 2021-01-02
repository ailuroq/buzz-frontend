import axios from '../axios/axios'
import {ADD_USER} from '../constants/actionTypes'

const _addUser = (user) => ({
    type: ADD_USER,
    user
})

export const addUser = (userData = {
    name: '',
    mail: '',
    password: ''
}) => {
    return dispatch => {
        const user = {
            name: userData.name,
            mail: userData.mail,
            password: userData.password
        };
        return axios.post('http://localhost:3000/login', user).then(result => {
            dispatch(_addUser(result.data))
        })
    }
}
