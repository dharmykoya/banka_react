import React from 'react';

const clientDetails = (props) => {
  return (
    <div className="dashboard-profile-item">
      <h5>ACCOUNT DETAILS</h5>
      <ul className="list-account-item">
        <li className="list-inline-item" id="account-number">
          Account No: {props.accountNumber}
        </li>
        <li className="list-inline-item" id="email">
          Email: {props.accountEmail}
        </li>
        <li className="list-inline-item" id="status">
          Status:{props.accountStatus}
        </li>
        <li className="list-inline-item">Phone No: {props.phoneNumber}</li>
      </ul>
    </div>
  );
};

export default clientDetails;
