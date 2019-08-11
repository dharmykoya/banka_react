import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Dashboard.css';
import PropTypes from 'prop-types';
import DashboardInfo from '../../components/DashboardInfo/DashboardInfo';
import ClientDetails from '../../components/ClientDetails/ClientDetails';
import action from './store/dashboard.action';
import PageLoading from '../../components/PageLoading/PageLoading';
import Logout from '../Logout/Logout';

const { fetchUserAccount } = action;

export class Dashboard extends Component {
  componentDidMount() {
    this.props.userAccount();
  }

  render() {
    let dashboardDetails = <PageLoading />;
    const token = localStorage.getItem('token');
    if (!token) {
      dashboardDetails = <Logout />;
    }
    if (!this.props.isLoading) {
      const {
        account_number: accountNumber,
        balance,
        status,
        type: accountType
      } = this.props.accountDetails;
      const { email, firstName, lastName } = this.props.userDetails;
      const name = `${firstName} ${lastName}`;
      dashboardDetails = (
        <div>
          <section className="dashboard-container">
            <div className="dashboard-header">
              <DashboardInfo
                profileImage="https://via.placeholder.com/150"
                accountName={name}
                accountBalance={balance}
                accountType={accountType === 'savings' ? 'SAVINGS' : 'CURRENT'}
              />
            </div>
            <div className="dashboard-profile">
              <ClientDetails
                accountNumber={accountNumber}
                accountEmail={email}
                phoneNumber="08037145164"
                accountStatus={status === 'active' ? 'ACTIVE' : 'DORMANT'}
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
    }
    return dashboardDetails;
  }
}

Dashboard.propTypes = {
  userId: PropTypes.number,
  accountDetails: PropTypes.object,
  userDetails: PropTypes.object,
  isLoading: PropTypes.bool,
  userAccount: PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    accountDetails: state.account.accountDetails,
    userDetails: state.account.userDetails,
    isLoading: state.account.loading,
    logoutState: state.auth.logoutState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userAccount: () => dispatch(fetchUserAccount())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
