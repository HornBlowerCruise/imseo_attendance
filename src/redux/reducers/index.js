import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import legacyReducer from "./legacyReducer";
import worshipStatReducer from "./worshipStatReducer";

export default combineReducers({
    userId : loginReducer, 
    worshipStat : worshipStatReducer, 
    legacy : legacyReducer,
})