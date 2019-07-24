import React from 'react';
import NavigationItem from '../NavigationItem/NavigationItem';
import classes from './LeftNavigationItems.css';

const leftNavigationItems = () => (
  <nav className={classes.navItemLeft}>        
    <ul>
      <NavigationItem>Home</NavigationItem>
      <NavigationItem>About</NavigationItem>
      <NavigationItem>Service</NavigationItem>
    </ul>
  </nav>
);

export default leftNavigationItems;