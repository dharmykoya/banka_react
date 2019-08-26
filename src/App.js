/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer, Slide } from 'react-toastify';
import { connect } from 'react-redux';
import setupStore from './store/index';
import action from './pages/Signin/store/auth.action';
import 'react-toastify/dist/ReactToastify.css';
import Layout from './hoc/Layout/Layout';
import Homepage from './pages/HomePage/HomePage';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import dashboardAction from './pages/Dashboard/store/dashboard.action';
import TransactionHistory from './pages/TransactionHistory/TransactionHistory';
import Transaction from './pages/Transaction/Transaction';
import StaffDashboard from './pages/StaffDashboard/StaffDashboard';
import Logout from './pages/Logout/Logout';
const { authCheckState } = action;
const { fetchUserAccount } = dashboardAction;
const store = setupStore();

import './index.css';
import CreateAccount from './pages/CreateAccount/CreateAccount';
if (localStorage.token) {
  store.dispatch(authCheckState());
  store.dispatch(fetchUserAccount());
}

class App extends Component {
  state = {
    accountDetails: null
  };
  componentWillMount() {
    if (localStorage.token) {
      store.dispatch(authCheckState());
      store.dispatch(fetchUserAccount());
    }
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <ToastContainer
              autoClose={6000}
              transition={Slide}
              position="top-center"
            />
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/signin" exact component={Signin} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/dashboard" component={Dashboard} />
              <Route
                path="/transaction-history/"
                component={TransactionHistory}
                account={this.state}
              />
              <Route path="/staff" component={StaffDashboard} />
              <Route path="/transaction" component={Transaction} />
              <Route path="/create-account" component={CreateAccount} />
              <Route path="/logout" component={Logout} />
            </Switch>
          </Layout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
