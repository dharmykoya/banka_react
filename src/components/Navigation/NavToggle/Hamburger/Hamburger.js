/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import './Hamburger.css';

const hamburger = (props) => (
  <div className="Hamburger" role="button" tabIndex={0} onClick={props.navClicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

hamburger.propTypes = {
  navClicked: PropTypes.func
};

export default hamburger;
