import {ADD_USER} from "../constants/actionTypes";

const initialState = []
export const mainReducer = (state=initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.user];
        default: return state;
    }
}