import React, { Component } from 'react';
import { connect } from 'react-redux';
import action from './store/transactionHistory.action';
import dashboardAction from '../Dashboard/store/dashboard.action';
import PageLoading from '../../components/PageLoading/PageLoading';
import TransactionHistoryTable from '../../components/TransactionHistoryTable/TransactionHistoryTable';

import Logout from '../Logout/Logout';
import './TransactionHistory.css';

const { transactionHistoryFetch } = action;
const { fetchUserAccount } = dashboardAction;

class TransactionHistory extends Component {


  componentWillMount() {
    this.props.transactionHistory(this.props.accountDetails.account_number);
  }

  render() {
    let tableAccountDetails = <PageLoading />;
    if (!this.props.isLoading) {
      tableAccountDetails = (
        <TransactionHistoryTable
          accountDetails={this.props.accountDetails}
          transactionsList={this.props.transactionsList}
        />
      );
    }

    const token = localStorage.getItem('token');
    if (!token) {
      tableAccountDetails = <Logout />;
    }
    return tableAccountDetails;
  }
}

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    accountDetails: state.account.accountDetails,
    userDetails: state.account.userDetails,
    transactionsList: state.transactionHistory.accountTransactions,
    isLoading: state.transactionHistory.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    transactionHistory: (accountNumber) =>
      dispatch(transactionHistoryFetch(accountNumber)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistory);
