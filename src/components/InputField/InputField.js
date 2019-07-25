import React from 'react';

const inputfield = props => {
  return (
    <input className='inputField'
      type={props.type}
      id={props.id}
      placeholder={props.placeholder}
      name={props.name}
      required={props.required}
    />
  );
};

export default inputfield;
