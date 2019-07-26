/* eslint-disable arrow-parens */
import React, { Component } from 'react';
import axios from '../../axios-auth';
import './Signin.css';
import Inputfield from '../../components/InputField/InputField';
import Button from '../../components/Buttons/Button';
import Spinner from '../../components/Spinner/Spinner';

class Signin extends Component {
  state = {
    userData: {
      email: {
        elementtype: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
          required: true
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
          required: true
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
    formIsValid: false,
    loading: false
  };

  signinHandler = (e) => {
    this.setState({ loading: true });
    e.preventDefault();
    const { userData } = this.state;
    const inputNames = Object.keys(userData);
    const loginDetails = {};
    inputNames.forEach((name) => {
      loginDetails[name] = userData[name].value;
    });

    axios
      .post('auth/signin', loginDetails)
      .then((response) => {
        this.setState({ loading: false });
      })
      .catch((error) => {
        this.setState({ loading: false });
      });
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
    const { userData, loading, formIsValid } = this.state;
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

    return (
      <main>
        <div className="login-container">
          <form
            className="register-form"
            name="signinForm"
            id="signinForm"
            onSubmit={this.signinHandler}
          >
            <div className="form">
              <div className="alert hide">
                <span className="closebtn" id="closebtn">
                  &times;
                </span>
                <h3 className="message white">good to go</h3>
              </div>

              {formElementsArray.map((formElement) => (
                <Inputfield
                  key={formElement.id}
                  elementType={formElement.config.elementtype}
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
                <a href="signup.html">Signup</a>
              </p>
            </div>
          </form>
        </div>
      </main>
    );
  }
}


export default Signin;
