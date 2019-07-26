import React, { Component } from 'react';
import Aux from '../Cover/Cover';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import NavToggle from '../../components/Navigation/NavToggle/NavToggle';

class Layout extends Component {
  state = {
    showNavToggle: false
  };

  navToggleHandler = () => {
    console.log(23, 'goooooddd');
    this.setState((prevState) => {
      return { showNavToggle: !prevState.showNavToggle };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar navClicked={this.navToggleHandler} />
        <NavToggle open={this.state.showNavToggle} />
        {this.props.children}
      </Aux>
    );
  }
}

export default Layout;
