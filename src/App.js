/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import action from './pages/Signin/store/auth.action';
import Layout from './hoc/Layout/Layout';
import Homepage from './pages/HomePage/HomePage';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import TransactionHistory from './pages/TransactionHistory/TransactionHistory';
import StaffDashboard from './pages/StaffDashboard/StaffDashboard';
import Logout from './pages/Logout/Logout';
const { authCheckState } = action;

import './index.css';

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/transaction-history" component={TransactionHistory} />
          <Route path="/staff" component={StaffDashboard} />
          <Route path="/logout" component={Logout} />
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(authCheckState())
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
