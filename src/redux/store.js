import { createStore, applyMiddleware, combineReducers } from "redux";
// import rootReducer from "./reducers/rootReducer";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;