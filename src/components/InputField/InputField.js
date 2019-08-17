/* eslint-disable arrow-parens */

import React from 'react';
import './InputField.css';

const input = (props) => {
  let inputElement = null;
  const inputClass = ['inputField', 'inputBorder'];
  const {
    value,
    elementConfig,
    changed,
    invalid,
    shouldValidate,
    touched
  } = props;
  if (invalid && shouldValidate && touched) {
    inputClass.pop();
    inputClass.push('inputError');
  }

  switch (props.elementtype) {
    case 'input':
      return (inputElement = (
        <input
          className={inputClass.join(' ')}
          defaultValue={value}
          {...elementConfig}
          onChange={changed}
        />
      ));
    case 'textarea':
      return (inputElement = (
        <textarea className="hello" {...elementConfig} onChange={changed}>
          {value}
        </textarea>
      ));

    case 'select':
      inputElement = (
        <select className="hello" defaultValue={value}>
          {props.elementConfig.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;

    default:
      inputElement = (
        <input
          className="hello"
          value={value}
          {...elementConfig}
          onChange={changed}
        />
      );
  }
  return inputElement;
};

export default input;
