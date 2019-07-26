import React from 'react';
import RightNavigationItems from '../NavigationItems/RightNavigationItems/RightNavigationItems';
import './NavToggle.css';

const navToggle = (props) => {
  let attachedClasses = ['NavToggle', 'Close'];
  if (props.open) {
    attachedClasses = ['NavToggle', 'Open'];
  }
  return (
    <nav className={attachedClasses.join(' ')}>
      <RightNavigationItems />
    </nav>
  );
};

export default navToggle;
