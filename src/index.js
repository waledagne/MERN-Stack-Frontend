import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./saga";

import App from "./component/App";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  allReducers,
  compose(
    applyMiddleware(sagaMiddleware),

  )
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
