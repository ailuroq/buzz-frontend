import mainReducer from '../reducers/mainReducer'
import {combineReducers, createStore} from "redux";

const store = createStore(combineReducers({
    mainReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store