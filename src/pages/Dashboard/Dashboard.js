import React from 'react';
import './Dashboard.css';
import DashboardInfo from '../../components/DashboardInfo/DashboardInfo';
import ClientDetails from '../../components/ClientDetails/ClientDetails';

const Dashboard = () => {
  return (
    <div>
      <section className="dashboard-container">
        <div className="dashboard-header">
          <DashboardInfo
            profileImage="https://via.placeholder.com/150"
            accountName="Damilola Adekoya"
            accountBalance="50,000"
            accountType="Savings Balance"
          />
        </div>
        <div className="dashboard-profile">
          <ClientDetails
            accountNumber="209090294"
            accountEmail="dami@yahoo.com"
            phoneNumber="08037145164"
            accountStatus="active"
          />
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
