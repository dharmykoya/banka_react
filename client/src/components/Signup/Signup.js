import React from "react";
import "./Signup.css";

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
            <input
              type="text"
              id="firstName"
              placeholder="First Name"
              name="firstName"
              required
            />
            <input
              type="text"
              id="lastName"
              placeholder="Last Name"
              name="lastName"
              required
            />
            <input
              type="email"
              id="email"
              placeholder="Email address"
              name="email"
              required
            />
            <input
              type="password"
              id="password"
              placeholder="password"
              name="password"
              required
            />
            <input
              type="password"
              id="confirm_password"
              placeholder="confirm password"
              name="password2"
              required
            />
            <button className="signup-button">Sign UP</button>
            <div className="button-loader" />
            <p className="message">
              Registered? <a href="signin.html">Login</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
