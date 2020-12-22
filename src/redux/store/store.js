import mainReducer from '../reducers/mainReducer'
import {combineReducers, createStore} from "redux";

const store = createStore(combineReducers({
    mainReducer
}))

export default store