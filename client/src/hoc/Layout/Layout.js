import React, { Component } from "react";
import Aux from "../Cover/Cover";
import NavBar from "../../components/Navbar/Navbar";

class Layout extends Component {
  render() {
    return (
      <Aux>
        <NavBar />
        {this.props.children}
      </Aux>
    );
  }
}

export default Layout;
