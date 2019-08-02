import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
// import { Provider } from "react-redux";
// import { createStore } from "redux";
// import { initialSate, reducer } from "./redux/actions";
// //  = require("./redux/actions");
// const initialState = ["hello"];
// const store = createStore(reducer, initialState);
import { Provider } from "react-redux";
import { reducer } from "./redux/actions";
import { createStore } from "redux";

let initialStore = {};

const store = createStore(reducer, initialStore);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
