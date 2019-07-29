import React from 'react';
import PropTypes from 'prop-types';
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
navToggle.propTypes = {
  open: PropTypes.bool.isRequired
};
export default navToggle;
