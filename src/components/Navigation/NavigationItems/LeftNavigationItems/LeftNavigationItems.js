import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './LeftNavigationItems.css';

const leftNavigationItems = (props) => (
  <nav>
    <ul>
      <NavigationItem link={props.isClient ? 'dashboard' : 'staff'}>
        Profile
      </NavigationItem>
      {props.isClient ? (
        <NavigationItem link="transaction-history">
          My Transaction
        </NavigationItem>
      ) : (
        <NavigationItem link="transaction">Transaction</NavigationItem>
      )}
    </ul>
  </nav>
);

export default leftNavigationItems;
