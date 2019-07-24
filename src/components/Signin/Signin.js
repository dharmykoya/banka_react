import React from "react";
import "./Signin.css";

const Signin = () => (
  <main>
    <div class="login-container">
      <form
        class="register-form"
        action=""
        name="signinForm"
        id="signinForm"
        method="POST"
      >
        <div class="form">
          <div class="alert hide">
            <span class="closebtn" id="closebtn">
              &times;
            </span>
            <h3 class="message white" />
          </div>
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
          <button class="login-button">Login</button>
          <div class="button-loader" />
          <p class="message">
            Not Registered? <a href="signup.html">Signup</a>
          </p>
        </div>
      </form>
    </div>
  </main>
);

export default Signin;
