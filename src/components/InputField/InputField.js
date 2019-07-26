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
      inputElement = (
        <input
          className={inputClass.join(' ')}
          value={value}
          {...elementConfig}
          onChange={changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className="hello"
          value={value}
          {...elementConfig}
          onChange={changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select className="hello" value={value}>
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
