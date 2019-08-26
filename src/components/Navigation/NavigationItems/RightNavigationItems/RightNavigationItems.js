import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './RightNavigationItems.css';

const rightNavigationItems = (props) => (
  <div className="NavRight">
    <ul>
      {props.isAuthenticated ? (
        <NavigationItem link="/logout">Logout</NavigationItem>
      ) : (
        <NavigationItem link="/signin">Signin</NavigationItem>
      )}
      {props.isAuthenticated ? (
        <NavigationItem link="#" className="role-disabled">
          {props.isClient ? 'CLIENT' : 'STAFF'}
        </NavigationItem>
      ) : (
        ''
      )}
    </ul>
  </div>
);

export default rightNavigationItems;
