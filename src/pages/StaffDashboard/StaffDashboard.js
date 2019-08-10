import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageLoading from '../../components/PageLoading/PageLoading';

class StaffDashboard extends Component {
  render() {
    let staffDashboard = <PageLoading />;
    if (!this.props.loading && this.props.staff) {
      console.log(314, this.props.staffDetails);
      const { id, email, firstName, lastName } = this.props.staffDetails;
      const name = `${firstName} ${lastName}`;
      console.log(54687, name);
      staffDashboard = (
        <main>
          <section className="dashboard-container">
            <div className="dashboard-header">
              <div className="dashboard-header-item-1">
                <div className="user-photo">
                  <img
                    id="profilePic"
                    className="profilepic"
                    src="https://via.placeholder.com/150"
                    alt="profile"
                  />
                </div>
              </div>

              <div className="dashboard-header-item-2">
                <h4 id="staff-name">{name}</h4>
              </div>

              <ul className="dashboard-header-item-3">
                <li className="list-inline-item list-small">
                  <span id="staff-role">Staff</span>
                  <br />
                  <small>Role</small>
                </li>
              </ul>
            </div>

            <div className="dashboard-profile">
              <div className="dashboard-profile-item">
                <h5>PERSONAL DETAILS</h5>
                <ul className="list-account-item">
                  <li className="list-inline-item">
                    Email: <span id="staff-email">{email}</span>
                  </li>
                  <li className="list-inline-item">
                    Staff ID: <span id="staff-ID">00{id}</span>
                  </li>
                  <li className="list-inline-item">Phone No: 0708934564</li>
                  <li className="list-inline-item">
                    Status: <span className="status-active-badge">Active</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="dashboard-main">
              <div className="dashboard-main-item-1">
                <h5>CONTROL PANEL</h5>
                <ul className="list-inline-item">
                  <li id="upload-picture" className="list-inline-item">
                    <i className="fa fa-envelope"></i>Upload Picture
                  </li>
                  <li id="change-password" className="list-inline-item">
                    <i className="fa fa-lock"></i>Change Password
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-comments" aria-hidden="true"></i>Open
                    Ticket
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      );
    }
    return staffDashboard;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
    staffDetails: state.auth.userDetails,
    staff: state.auth.userType === 'staff' && !state.auth.isAdmin
  };
};

export default connect(mapStateToProps)(StaffDashboard);
