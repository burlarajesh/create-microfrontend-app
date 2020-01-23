import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import * as Counter from "./Counter";

const createRootReducer = history => {
    const reducers = {
        counter: Counter.reducer,
    };

    return combineReducers({
        router: connectRouter(history),
        ...reducers
    });
};

export default createRootReducer;
