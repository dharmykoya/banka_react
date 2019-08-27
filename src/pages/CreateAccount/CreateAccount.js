/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import './CreateAccount.css';
import Inputfield from '../../components/InputField/InputField';
import Button from '../../components/Buttons/Button';
import Spinner from '../../components/Spinner/Spinner';
import action from './createAccount.action';
import Logout from '../Logout/Logout';

const { createAccount } = action;

export class CreateAccount extends Component {
  state = {
    userData: {
      accountType: {
        elementtype: 'select',
        elementConfig: {
          options: [
            { value: '', displayValue: 'Select Account Type' },
            { value: 'savings', displayValue: 'Savings' },
            { value: 'current', displayValue: 'Current' }
          ],
          name: 'role',
          id: 'account-select'
        },
        value: ''
      }
    }
  };

  createAccountHandler = (e) => {
    e.preventDefault();

    const { userData } = this.state;
    const inputNames = Object.keys(userData);
    const userDetails = {};
    inputNames.forEach((name) => {
      userDetails[name] = userData[name].value;
    });
    const token = this.props.token;
    this.props.createNewAccount(userDetails, token);
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

  render() {
    const { userData } = this.state;
    const { loading, error } = this.props;
    const InputNames = Object.keys(userData);

    const formElementsArray = [];

    InputNames.forEach((input) => {
      formElementsArray.push({
        id: input,
        config: userData[input]
      });
    });
    let button = <Button nameClass="login-button">Create Account</Button>;

    if (loading) {
      button = <Spinner />;
    }

    let errorMessage;

    // error message to be dispalyed from server
    if (error) {
      errorMessage = (
        <div className="alert hide">
          <span className="closebtn" id="closebtn"></span>
          <h3 className="message white">{error}</h3>
        </div>
      );
    }

    let authRedirect = null;
    const token = localStorage.getItem('token');
    if (!token) {
      authRedirect = <Logout />;
    }

    if (this.props.createAccount.accountDetails) {
      authRedirect = <Redirect to="/dashboard" />;
    }
    let welcome;
    if (this.props.userDetails) {
      welcome = (
        <h3>
          Welcome {this.props.userDetails.firstName.toUpperCase()}
          <strong className="welcome-name"></strong>, Please create a bank
          account to continue
        </h3>
      );
    }
    return (
      <main>
        {authRedirect}

        <div className="create-account-container">
          {welcome}
          <form
            className="register-form"
            name="signinForm"
            id="signinForm"
            onSubmit={this.createAccountHandler}
            data-testid="form"
          >
            <div className="form">
              {errorMessage}

              {formElementsArray.map((formElement) => (
                <Inputfield
                  key={formElement.id}
                  elementtype={formElement.config.elementtype}
                  elementConfig={formElement.config.elementConfig}
                  value={formElement.config.value}
                  invalid={!formElement.config.valid}
                  shouldValidate={formElement.config.validation}
                  touched={formElement.config.touched}
                  changed={(event) =>
                    this.inputChangedHandler(event, formElement.id)
                  }
                />
              ))}
              <p>
                By creating an account you agree to our{' '}
                <Link to="#" class="orange">
                  Terms & Privacy
                </Link>
                .
              </p>
              {button}
            </div>
          </form>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    token: state.auth.token,
    createAccount: state.createAccount,
    loading: state.auth.loading,
    userDetails: state.auth.userDetails,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    client: state.auth.userType === 'client',
    staff: state.auth.userType === 'staff' && !state.auth.isAdmin
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createNewAccount: (accountType, token) =>
      dispatch(createAccount(accountType, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateAccount);
