import React, { Fragment } from "react";
import { render } from "react-dom";
import Homepage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import "./index.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Homepage />
    </Fragment>
  );
};

render(<App />, document.getElementById("app"));

export default App;
