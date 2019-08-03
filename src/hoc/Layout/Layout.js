import React, { Component } from 'react';
import { connect } from 'react-redux'
import Aux from '../Cover/Cover';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import NavToggle from '../../components/Navigation/NavToggle/NavToggle';
import authAction from '../../pages/Signin/store/auth.action';

class Layout extends Component {
  state = {
    showNavToggle: false
  };

  navToggleHandler = () => {
    this.setState((prevState) => {
      return { showNavToggle: !prevState.showNavToggle };
    });
  };
  render() {
    return (
      <Aux>
        <Toolbar navClicked={this.navToggleHandler} isAuthenticated={this.props.isAuthenticated}/>
        <NavToggle open={this.state.showNavToggle} />
        {this.props.children}
      </Aux>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};
export default connect(mapStateToProps)(Layout);
