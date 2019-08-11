import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavigationItem.css';

const navigationItem = (props) => (
  <li className="Navitem">
    <NavLink className={props.className} to={props.link} exact>
      {props.children}
    </NavLink>
  </li>
);
export default navigationItem;
