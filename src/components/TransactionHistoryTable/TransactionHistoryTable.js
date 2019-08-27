import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TransactionHistoryTable = (props) => {
  const {
    account_number: accountNumber,
    type,
    status,
    balance
  } = props.accountDetails;
  const accountTableDetails = (
    <ul className="list-account-item">
      <li className="list-inline-item" id="account-number">
        Account Number: {accountNumber}
      </li>
      <li className="list-inline-item" id="email">
        Type: {type}
      </li>
      <li className="list-inline-item" id="status">
        Status: {status}
      </li>
      <li className="list-inline-item" id="accountBalance">
        Account Balance: &#8358;{balance}
      </li>
    </ul>
  );
  let transactionsListTable;
  let noTransaction;
  if (!Array.isArray(props.transactionsList)) {
    noTransaction = (
      <tr>
        <td colSpan="6" className="p-tag-transaction">
          No transaction on this account
        </td>
      </tr>
    );
  }
  if (Array.isArray(props.transactionsList)) {
    transactionsListTable = props.transactionsList.map((transaction, index) => {
      return (
        <tr className="" key={index + 1}>
          <td>
            {moment(transaction.created_on).format('MMMM Do YYYY, h:mm a')}
          </td>
          <td>{transaction.cashier}</td>
          <td>{transaction.type === 'debit' ? transaction.amount : ''}</td>
          <td>{transaction.type === 'credit' ? transaction.amount : ''}</td>
          <td>{transaction.old_balance}</td>
          <td>{transaction.new_balance}</td>
        </tr>
      );
    });
  }

  return (
    <main>
      <section className="dashboard-container">
        <div className="dashboard-profile">
          <div className="dashboard-profile-item">
            <h5>ACCOUNT DETAILS</h5>

            {accountTableDetails}
          </div>
        </div>
      </section>

      <section>
        <div className="transaction-table">
          <p className="text-center">Transaction Details</p>
          <table id="transaction-summary">
            <thead>
              <tr>
                <th className="transaction-date">Date</th>
                <th className="text-center">Cashier</th>
                <th className="text-center">Debit (&#8358;)</th>
                <th className="text-center">Credit (&#8358;)</th>
                <th className="text-center">Old Balance (&#8358;)</th>
                <th className="text-center">New Balance (&#8358;)</th>
              </tr>
              {noTransaction}
            </thead>

            <tbody className="tbody">{transactionsListTable}</tbody>
            <tfoot>
              <tr>
                {/* <td colSpan="6" className="tran-pagination">
                  <div className="pagination">
                    <Link to="#" exact>
                      &laquo;
                    </Link>
                    <Link to="#" className="active">
                      1
                    </Link>
                    <Link to="#">2</Link>
                    <Link to="#">3</Link>
                    <Link to="#">&raquo;</Link>
                  </div>
                </td> */}
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
    </main>
  );
};

export default TransactionHistoryTable;
