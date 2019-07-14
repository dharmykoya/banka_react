import React from "react";
import "./Transaction.css";

const Transaction = () => {
  return (
    <main>
      <section class="transaction-container">
        <section class="">
          <div class="account-search">
            <form class="check-form" action="" id="check_form">
              <input
                class="check-input"
                type="text"
                id="account-no"
                placeholder="ACCOUNT NUMBER"
                name="account-no"
                required
              />
              <input
                class="check-input"
                type="text"
                id="account_name"
                placeholder="ACCOUNT NAME"
                name="account-name"
              />
              <button
                class="check-button"
                type="submit"
                class="account-confirm"
              >
                Check
              </button>
              <div class="check-transaction-loader">something here</div>
            </form>
          </div>
        </section>

        <section>
          <div id="no-account-found" class="no-account-found hide">
            <span class="close">&times;</span>
            <div class="error">
              <ul id="error">something here</ul>
            </div>
          </div>
          <div class="account-transaction-container" id="t-container">
            <div class="account-found">
              <div class="transaction-container">
                <div class="user-photo">
                  <img
                    class="profilepic"
                    src="https://via.placeholder.com/150"
                  />
                </div>
                <div id="account-found-details">
                  <p>
                    Name: <strong id="name-found">Sofiat</strong>
                  </p>
                  <p>
                    Account No: <strong id="account-no-found">302930842</strong>
                  </p>
                  <p>
                    Balance: <strong id="account-balance-found">20,000</strong>
                  </p>
                  <p>
                    Email: <strong id="email-found">koya@gmail.com</strong>
                  </p>
                  <p>
                    Type: <strong id="account-type-found">savnings</strong>
                  </p>
                  <p>
                    Status: <strong id="account-status-found">dormant</strong>
                  </p>
                </div>
              </div>
            </div>
            <div class="credit-debit-form">
              <div class="credit-debit">
                <h2>CREDIT/DEBIT</h2>
                <form class="register-form" id="confirm_form">
                  <div class="form">
                    <input
                      type="text"
                      id="amount-pay"
                      placeholder="Amount"
                      name="amount"
                      required
                    />
                    <select
                      name="role"
                      aria-placeholder="Transaction type"
                      id="transaction-type"
                    >
                      <option selected="selected">
                        Select transaction type
                      </option>
                      <option value="credit">Credit</option>
                      <option value="debit">Debit</option>
                    </select>
                    <div class="make-transaction-loader">loader</div>
                    <button class="make-transaction-button">POST</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </section>
    </main>
  );
};

export default Transaction;
