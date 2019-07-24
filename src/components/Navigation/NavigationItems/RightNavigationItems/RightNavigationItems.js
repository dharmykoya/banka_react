import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './RightNavigationItems.css';

const rightNavigationItems = () => (
  <div className="NavRight">
    <ul>
      <NavigationItem link="/signin">Signin</NavigationItem>
      <NavigationItem link="/signup">Signup</NavigationItem>
    </ul>
  </div>
);

export default rightNavigationItems;
