import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// redux
import store from "./store";
import { Provider } from "react-redux";
// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/popper.js/dist/popper.min.js";
import "./assets/css/main.css";
import "./assets/css/bootstrap-grid.min.css";
import "./assets/css/bootstrap-reboot.min.css";
import "./assets/css/ionicons.min.css";
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
