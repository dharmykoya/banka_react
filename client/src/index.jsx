import React, { Fragment } from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

const app = (
  <HashRouter>
    <App />
  </HashRouter>
);

render(app, document.getElementById("app"));

export default App;
