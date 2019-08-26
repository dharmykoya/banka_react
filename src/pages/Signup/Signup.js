/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './Signup.css';
import Inputfield from '../../components/InputField/InputField';
import Button from '../../components/Buttons/Button';
import Spinner from '../../components/Spinner/Spinner';
import action from '../Signin/store/auth.action';

const { register } = action;

export class Signup extends Component {
  state = {
    userData: {
      firstName: {
        elementtype: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'First Name',
          required: true,
          id: 'firstName',
          name: 'firstName'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      lastName: {
        elementtype: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Last Name',
          required: true,
          id: 'lastName',
          name: 'lastName'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementtype: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
          required: true,
          id: 'login-email',
          name: 'email'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementtype: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Your Password',
          required: true,
          id: 'login-password',
          name: 'password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      },
      confirmPassword: {
        elementtype: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Confirm Password',
          required: true,
          id: 'login-password-2',
          name: 'password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
      }
    },
    formIsValid: false
  };

  signupHandler = (e) => {
    e.preventDefault();

    const { userData } = this.state;
    const inputNames = Object.keys(userData);
    const userDetails = {};
    inputNames.forEach((name) => {
      userDetails[name] = userData[name].value;
    });

    this.props.signup(userDetails);
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
    updatedFormElement.valid = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    );
    updatedFormElement.touched = true;
    updatedUserData[inputName] = updatedFormElement;

    let formIsValid = true;

    Object.keys(updatedUserData).forEach((input) => {
      formIsValid = updatedUserData[input].valid && formIsValid;
    });

    this.setState({ userData: updatedUserData, formIsValid });
  };

  checkValidity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }
    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    return isValid;
  };

  render() {
    const { userData, formIsValid } = this.state;
    const { loading, error } = this.props;
    const InputNames = Object.keys(userData);

    const formElementsArray = [];

    InputNames.forEach((input) => {
      formElementsArray.push({
        id: input,
        config: userData[input]
      });
    });
    let button = (
      <Button nameClass="login-button" disabled={!formIsValid}>
        Login
      </Button>
    );

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

    // Redirection
    let authRedirect = null;
    if (this.props.isAuthenticated && this.props.client) {
      authRedirect = <Redirect to="/dashboard" />;
    }
    if (this.props.isAuthenticated && this.props.staff) {
      authRedirect = <Redirect to="/staff" />;
    }
    if (this.props.isAuthenticated && this.props.client && this.props.errror) {
      authRedirect = <Redirect to="/create-account" />;
    }

    return (
      <main>
        {authRedirect}
        <div className="login-container">
          <form
            className="register-form"
            name="signinForm"
            id="signinForm"
            onSubmit={this.signupHandler}
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
              {button}
              <div className="button-loader" />
              <p className="message">
                Not Registered?
                <a href="signup.html">Signin</a>
              </p>
            </div>
          </form>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    client: state.auth.userType === 'client',
    staff: state.auth.userType === 'staff' && !state.auth.isAdmin
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signup: (userDetails) => dispatch(register(userDetails))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Signup);
