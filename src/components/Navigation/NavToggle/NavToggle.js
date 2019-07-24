import React from 'react';
import RightNavigationItems from '../NavigationItems/RightNavigationItems/RightNavigationItems';
import './NavToggle.css';

const navToggle = (props) => {
  console.log(44, props)
  let attachedClasses = ['NavToggle', 'Close']
  if (props.open) {
    attachedClasses = ['NavToggle', 'Open']
  }
  console.log(34, attachedClasses)
  return  (
    <nav className={attachedClasses.join(' ')}>
      <RightNavigationItems />
    </nav>
  )
};

export default navToggle;