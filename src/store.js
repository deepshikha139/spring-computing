import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { reducers } from "./reducers";
import { rootSaga } from "./sagas";

// const middleware = [];

const sagaMiddleware = createSagaMiddleware();

//TODO push middleware

// reducers, middleware
const store = createStore(reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
