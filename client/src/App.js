import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import Homepage from './components/HomePage/HomePage';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
import Dashboard from './components/Dashboard/Dashboard';
import CreateAccount from './components/CreateAccount/CreateAccount';
import Transaction from './components/Transaction/Transaction';
import ListUser from './components/ListUser/ListUser';
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
