import {ADD_USER, GET_USER} from "../constants/actionTypes";

const initialState = []
export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.user];
        case GET_USER:
            return action.user
        default:
            return state;
    }
}