import React from 'react';
import Aux from '../../hoc/Cover/Cover';

const dashboardInfo = (props) => {
  return (
    <Aux>
      <div className="dashboard-header-item-1">
        <div className="user-photo">
          <img
            id="profilePic"
            className="profilepic"
            src={props.profileImage}
            alt=""
          />
        </div>
      </div>

      <div className="dashboard-header-item-2">
        <h4 id="accountName">{props.accountName}</h4>
      </div>

      <ul className="dashboard-header-item-3">
        <li className="list-inline-item list-small">
          <div id="accountBalance">&#8358;{props.accountBalance}</div>
          <small>{props.accountType}</small>
        </li>
      </ul>
    </Aux>
  );
};

export default dashboardInfo;
