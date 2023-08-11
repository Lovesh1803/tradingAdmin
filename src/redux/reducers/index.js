import { combineReducers } from "redux";
import AuthReducer from "./auth";
import AdminReducer from "./admin";


const AppReducers = combineReducers({
    authReducer: AuthReducer,
    adminReducer: AdminReducer
})

export default AppReducers