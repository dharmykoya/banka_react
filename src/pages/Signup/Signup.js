import React from 'react';
import './Signup.css';
import Inputfield from '../../components/InputField/InputField';
import Button from '../../components/Buttons/Button';

const Signup = () => {
  return (
    <main>
      <div className="signup-container">
        <form className="register-form" action="" id="signupForm" method="POST">
          <div className="form">
            <div className="alert hide">
              <span className="closebtn" id="closebtn">
                &times;
              </span>
              <div className="clearfix" />
              <ul className="message white" />
            </div>
            <Inputfield
              type="text"
              id="firstName"
              placeholder="Firstname"
              name="firstName"
              required="true"
            />
            <Inputfield
              type="text"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              required
            />
            <Inputfield
              type="email"
              id="email"
              placeholder="Email address"
              name="email"
              required
            />
            <Inputfield
              type="password"
              id="password"
              placeholder="password"
              name="password"
              required
            />
            <Inputfield
              type="password"
              id="confirm_password"
              placeholder="confirm password"
              name="password2"
              required
            />
            <Button nameClass="signup-button">Sign UP</Button>
            <div className="button-loader" />
            <p className="message">
              Registered?
              <a href="signin.html">Login</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
