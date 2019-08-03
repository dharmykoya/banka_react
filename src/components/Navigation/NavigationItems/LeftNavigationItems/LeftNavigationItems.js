import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import './LeftNavigationItems.css';

const leftNavigationItems = () => (
  <nav>        
    <ul>
      <NavigationItem link='dashboard'>Profile</NavigationItem>
      <NavigationItem link='transaction-history'>My Transaction</NavigationItem>
    </ul>
  </nav>
);

export default leftNavigationItems;