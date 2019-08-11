import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './RightNavigationItems.css';

const rightNavigationItems = (props) => {
  return (
    <div className="NavRight">
      <ul>
        {props.isAuthenticated ? (
          <NavigationItem link="/logout">Logout</NavigationItem>
        ) : (
          <NavigationItem link="/signin">Signin</NavigationItem>
        )}
        {props.isAuthenticated ? (
          <NavigationItem link="#" className="role-disabled">
            {!props.isClient ? 'CLIENT' : 'STAFF'}
          </NavigationItem>
        ) : (
          <NavigationItem link="/signup">Signup</NavigationItem>
        )}
      </ul>
    </div>
  );
};

export default rightNavigationItems;
