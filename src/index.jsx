import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { saveObject } from "./utils/index";

let initialState = {
  currentView: true,
  photos: [],
  selectedPhoto: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ALL_PHOTO": {
      return {
        currentView: true,
        photos: action.payload,
        selectedPhoto: ""
      };
    }
    case "CHANGE_SINGLE": {
      return {
        currentView: false,
        photos: state.photos,
        selectedPhoto: state.photos[action.payload]
      };
    }
    case "CHANGE_ALL": {
      return {
        currentView: action.payload,
        photos: state.photos,
        selectedPhoto: state.selectedPhoto
      };
    }
    case "CHANGE_VIEW": {
      return {
        currentView: !state.currentView,
        photos: state.photos,
        selectedPhoto: state.selectedPhoto
      };
    }
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById("root")
);
