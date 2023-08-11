import { applyMiddleware, compose, createStore } from "redux";
import AppReducers from "../reducers";
import thunk from "redux-thunk";

const store = createStore(
    AppReducers, 
    {}, 
    compose(applyMiddleware(thunk)) // for development only
)

export default store;