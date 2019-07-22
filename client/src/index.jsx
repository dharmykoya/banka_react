import React, { Fragment } from "react";
import { render } from "react-dom";
import { HashRouter, BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(app, document.getElementById("app"));

export default App;
