import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import action from '../Signin/store/auth.action';

const { authLogout } = action;

export class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }
  render() {
    return <Redirect to="/signin" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(authLogout())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Logout);
