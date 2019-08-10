import React from 'react';
import RightNavigationItems from '../NavigationItems/RightNavigationItems/RightNavigationItems';
import { Link } from 'react-router-dom';
import Logo from '../../../../public/assets/logo5.png';
import LeftNavigationItems from '../NavigationItems/LeftNavigationItems/LeftNavigationItems';
import Hamburger from '../NavToggle/Hamburger/Hamburger';
import './Toolbar.css';

const toolbar = props => (
  <div className="headerContainer">
    <header className="Header">
      <div className="logo-container">
        <Link to="/" className="logo-text">
          <img className="index-logo" src={Logo} alt="logo" />
          anka
        </Link>
        {props.isAuthenticated ? <LeftNavigationItems isClient={props.isClient}/>: ''}
        
      </div>
      <Hamburger navClicked={props.navClicked} />
      
      <div>
        <RightNavigationItems isAuthenticated={props.isAuthenticated} isClient={props.isClient}/>
      </div>
    </header>
  </div>
);

export default toolbar;
