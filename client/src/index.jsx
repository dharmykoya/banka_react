import React, { Fragment } from "react";
import { render } from "react-dom";
import Homepage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/Signin/Signin";
import "./index.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Homepage />
      <Signin />
    </Fragment>
  );
};

render(<App />, document.getElementById("app"));

export default App;
