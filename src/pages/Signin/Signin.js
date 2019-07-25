import React from 'react';
import './Signin.css';
import Inputfield from '../../components/InputField/InputField';
import Button from '../../components/Buttons/Button';

const Signin = () => (
  <main>
    <div className="login-container">
      <form
        className="register-form"
        action=""
        name="signinForm"
        id="signinForm"
        method="POST"
      >
        <div className="form">
          <div className="alert hide">
            <span className="closebtn" id="closebtn">
              &times;
            </span>
            <h3 className="message white">good to go</h3>
          </div>
          <Inputfield type="email" placeholder="Email" required="true" />
          <Inputfield type="passwoed" placeholder="Password" required="true" />
          <Button nameClass="login-button">Login</Button>
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

export default Signin;
