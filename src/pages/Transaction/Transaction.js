/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Transaction.css';

import Inputfield from '../../components/InputField/InputField';
import action from './store/transaction.action';

const { getAccountDetail, makeTransaction } = action;

class Transaction extends Component {
  state = {
    userData: {
      accountNumber: {
        elementtype: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'ACCOUNT NUMBER',
          required: true,
          id: 'account-no',
          name: 'account_no'
        },
        value: ''
      },
      accountName: {
        elementtype: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ACCOUNT NAME',
          required: false,
          id: 'account_name',
          name: 'account-name'
        },
        value: ''
      }
    },
    transactionDetails: {
      amount: {
        elementtype: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'AMOUNT ',
          required: true,
          name: 'amount',
          id: 'amount-pay'
        },
        value: ''
      },
      transactionType: {
        elementtype: 'select',
        elementConfig: {
          options: [
            { value: '', displayValue: 'Select transaction type' },
            { value: 'credit', displayValue: 'Credit' },
            { value: 'debit', displayValue: 'Debit' }
          ],
          name: 'role',
          id: 'transaction-type'
        },
        value: ''
      }
    }
  };

  inputChangedHandler = (event, inputName) => {
    const { userData } = this.state;
    const updatedUserData = {
      ...userData
    };

    const updatedFormElement = {
      ...updatedUserData[inputName]
    };
    updatedFormElement.value = event.target.value;
    updatedUserData[inputName] = updatedFormElement;

    this.setState({ userData: updatedUserData });
  };

  transactionInputChangedHandler = (event, inputName) => {
    const { transactionDetails } = this.state;
    const updatedTransactionDetails = {
      ...transactionDetails
    };

    const updatedFormElement = {
      ...updatedTransactionDetails[inputName]
    };
    updatedFormElement.value = event.target.value;
    updatedTransactionDetails[inputName] = updatedFormElement;

    this.setState({ transactionDetails: updatedTransactionDetails });
  };

  getAccountDetails = (e) => {
    e.preventDefault();
    const { userData } = this.state;
    const accountNumber = userData.accountNumber.value;
    this.props.getAccount(accountNumber, this.props.token);
  };

  handleTransaction = (e) => {
    e.preventDefault();

    const { transactionDetails } = this.state;
    const transactionType = transactionDetails.transactionType.value;
    const accountNumber = this.props.accountDetails.account_number;
    const amount = { amount: transactionDetails.amount.value };
    const token = this.props.token;
    this.props.transaction(accountNumber, transactionType, amount, token);
  };

  render() {
    const { userData, transactionDetails } = this.state;
    const InputNames = Object.keys(userData);

    const formElementsArray = [];

    InputNames.forEach((input) => {
      formElementsArray.push({
        id: input,
        config: userData[input]
      });
    });
    const transactionInput = Object.keys(transactionDetails);

    const transactionFormElement = [];

    transactionInput.forEach((input) => {
      transactionFormElement.push({
        id: input,
        config: transactionDetails[input]
      });
    });
    return (
      <main>
        <section className="transaction-container">
          <section className="">
            <div className="account-search">
              <form
                className="check-form"
                id="check_form"
                onSubmit={this.getAccountDetails}
              >
                {formElementsArray.map((formElement) => (
                  <Inputfield
                    key={formElement.id}
                    elementtype={formElement.config.elementtype}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    changed={(event) =>
                      this.inputChangedHandler(event, formElement.id)
                    }
                  />
                ))}
                <button className="check-button account-confirm" type="submit">
                  Check
                </button>
              </form>
            </div>
          </section>

          {this.props.accountDetails ? (
            <section>
              <div className="account-transaction-container" id="t-container">
                <div className="account-found">
                  <div className="transaction-container">
                    <div className="user-photo">
                      <img
                        className="profilepic"
                        src="https://via.placeholder.com/150"
                        alt="profile"
                      />
                    </div>
                    <div id="account-found-details">
                      <p>
                        Name:{' '}
                        <strong id="name-found">
                          {this.props.accountDetails.fName}{' '}
                          {this.props.accountDetails.lName}
                        </strong>
                      </p>
                      <p>
                        Account No:{' '}
                        <strong id="account-no-found">
                          {this.props.accountDetails.account_number}
                        </strong>
                      </p>
                      <p>
                        Balance:{' '}
                        <strong id="account-balance-found">
                          {this.props.accountDetails.balance}
                        </strong>
                      </p>
                      <p>
                        Email:{' '}
                        <strong id="email-found">
                          {this.props.accountDetails.email}
                        </strong>
                      </p>
                      <p>
                        Type:{' '}
                        <strong id="account-type-found">
                          {this.props.accountDetails.type}
                        </strong>
                      </p>
                      <p>
                        Status:{' '}
                        <strong id="account-status-found">
                          {this.props.accountDetails.status}
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="credit-debit-form">
                  <div className="credit-debit">
                    <h2>CREDIT/DEBIT</h2>
                    <form
                      className="register-form"
                      id="confirm_form"
                      onSubmit={this.handleTransaction}
                    >
                      <div className="form">
                        {transactionFormElement.map((formElement) => (
                          <Inputfield
                            key={formElement.id}
                            elementtype={formElement.config.elementtype}
                            elementConfig={formElement.config.elementConfig}
                            value={formElement.config.value}
                            changed={(event) =>
                              this.transactionInputChangedHandler(
                                event,
                                formElement.id
                              )
                            }
                          />
                        ))}
                        <div className="make-transaction-loader">loader</div>
                        <button className="make-transaction-button">
                          POST
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          ) : (
            ''
          )}
        </section>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.transactions.loading,
    accountDetails: state.transactions.accountDetails,
    token: state.auth.token,
    error: state.transactions.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAccount: (accountNmuber, token) =>
      dispatch(getAccountDetail(accountNmuber, token)),

    transaction: (accountNmuber, transactionType, amount, token) =>
      dispatch(makeTransaction(accountNmuber, transactionType, amount, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Transaction);
