import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import action from './store/transactionHistory.action';
import PageLoading from '../../components/PageLoading/PageLoading';
import TransactionHistoryTable from '../../components/TransactionHistoryTable/TransactionHistoryTable';

import './TransactionHistory.css';

const { transactionHistoryFetch } = action;

class TransactionHistory extends Component {
  componentDidMount() {
    const { account_number: accountNumber } = this.props.accountDetails;
    this.props.transactionHistory(accountNumber);
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
      dispatch(transactionHistoryFetch(accountNumber))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistory);
