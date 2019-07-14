import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <section className="dashboard-container">
        <div className="dashboard-header">
          <div className="dashboard-header-item-1">
            <div className="user-photo">
              <img
                id="profilePic"
                className="profilepic"
                src="https://via.placeholder.com/150"
              />
            </div>
            <div className="dashboard-header-item-2">
              <h4 id="accountName">damilola adekoya</h4>
            </div>
            <ul className="dashboard-header-item-3">
              <li className="list-inline-item list-small">
                &#8358;<div id="accountBalance">20,009</div>
                <small>Savings Balance</small>
              </li>
            </ul>
          </div>
        </div>
        <div className="dashboard-profile">
          <div className="dashboard-profile-item">
            <h5>ACCOUNT DETAILS</h5>
            <ul className="list-account-item">
              <li className="list-inline-item" id="account-number">
                1000938302
              </li>
              <li className="list-inline-item" id="email">
                dami@yahoo.com
              </li>
              <li className="list-inline-item" id="status">
                active
              </li>
              <li className="list-inline-item">Phone No: 08037145164</li>
            </ul>
          </div>
        </div>

        <div className="dashboard-main">
          <div className="dashboard-main-item-1">
            <h5>CONTROL PANEL</h5>
            <ul className="list-inline-item">
              <li id="upload-picture" className="list-inline-item cursor">
                <i className="fa fa-envelope" />
                upload picture
              </li>
              <li id="change-password" className="list-inline-item cursor">
                <i className="fa fa-lock" />
                change password
              </li>
              <li className="list-inline-item">
                <i className="fa fa-comments" aria-hidden="true" />
                Open Ticket
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
