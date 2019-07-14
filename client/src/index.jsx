import React, { Fragment } from "react";
import { render } from "react-dom";
import Homepage from "./components/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Dashboard from "./components/Dashboard/Dashboard";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import "./index.css";

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Homepage />
      <Signin />
      <Signup />
      <Dashboard />
      <CreateAccount />
    </Fragment>
  );
};

render(<App />, document.getElementById("app"));

export default App;
