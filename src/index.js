import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import reducers from "./reducers";
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { fetchTeacher } from "./actions/teachers_actions";

const middleware = [logger, thunkMiddleware];

const store = createStore(reducers, applyMiddleware(...middleware));

store.dispatch(fetchTeacher());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
