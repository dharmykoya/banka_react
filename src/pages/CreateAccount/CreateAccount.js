import React from 'react';
import './createAccount.css';

const CreateAccount = () => {
  return (
    <main>
      <div className="create-account-container">
        <h3>
          Welcome <strong className="welcome-name" />, Please create a bank
          account to continue
        </h3>
        <form className="account-form" id="createAccountForm" method="POST">
          <div className="form">
            <div className="alert hide">
              <span className="closebtn" id="closebtn">
                &times;
              </span>
              <h3 className="message">please message here</h3>
            </div>
            <select
              name="role"
              id="accountType"
              aria-placeholder="Transaction type"
            >
              <option selected="selected">Account type</option>
              <option value="savings">Savings</option>
              <option value="current">Current</option>
            </select>
            <p>
              By creating an account you agree to our{' '}
              <a href="#" className="orange">
                Terms & Privacy
              </a>
              .
            </p>
            <button id="create-button">Create</button>
            <div className="button-loader">loader here</div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default CreateAccount;
