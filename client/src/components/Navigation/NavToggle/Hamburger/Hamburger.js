import React from 'react';
import './Hamburger.css';


const navToggle = (props) => (
  <div className='Hamburger' onClick={props.navClicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default navToggle;