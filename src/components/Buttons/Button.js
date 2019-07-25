import React from 'react';

const button = props => (
  <button type="button" className={props.nameClass}>
    {props.children}
  </button>
);

export default button;
