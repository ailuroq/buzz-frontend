import {mainReducer} from '../reducers/mainReducer'
import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import {rootReducer} from "../reducers/rootReducer";
/* for redux-devtools, pass into store args
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
*/
const store = createStore(rootReducer, applyMiddleware(thunk))

export default store