/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Homepage from './pages/HomePage/HomePage';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Transaction from './pages/Transaction/Transaction';
import ListUser from './pages/ListUser/ListUser';
import './index.css';

class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/signin" exact component={Signin} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/transaction" component={Transaction} />
          <Route path="/list-users" component={ListUser} />
        </Switch>
      </Layout>
    );
  }
}

export default App;
