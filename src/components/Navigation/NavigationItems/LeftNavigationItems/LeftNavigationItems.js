import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './LeftNavigationItems.css';

const leftNavigationItems = (props) => {
  let navBarItems = (
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
  );
  if (!props.noAccount) {
    navBarItems = (
      <ul>
        <NavigationItem link="/create-account">CreateAccount</NavigationItem>{' '}
      </ul>
    );
  }
  return <nav>{navBarItems}</nav>;
};

export default leftNavigationItems;
