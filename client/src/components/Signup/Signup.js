import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <main>
      <div class="signup-container">
        <form class="register-form" action="" id="signupForm" method="POST">
          <div class="form">
            <div class="alert hide">
              <span class="closebtn" id="closebtn">
                &times;
              </span>
              <div class="clearfix" />
              <ul class="message white" />
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
            <button class="signup-button">Sign UP</button>
            <div class="button-loader" />
            <p class="message">
              Registered? <a href="signin.html">Login</a>
            </p>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
