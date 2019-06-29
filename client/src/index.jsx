import React, { Fragment } from "react";
import { render } from "react-dom";
import "./index.css";

const App = () => {
  return (
    <Fragment>
      <h1>Hello, Damilola Adekoya</h1>
    </Fragment>
  );
};

render(<App />, document.getElementById("app"));

export default App;
