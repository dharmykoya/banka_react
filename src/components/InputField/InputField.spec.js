import React from 'react';
import { render } from '@testing-library/react';
import Input from './InputField';

const renderInput = (args) => {
  const defaultprops = {
    elementConfig: {
      placeholder: 'Your Email',
      required: true,
      type: 'email',
      elementtype: 'input',
      invalid: 'true'
    }
  };
  const props = { ...defaultprops, ...args };
  return render(<Input {...props} />);
};

it('should test for input displays Your Email placeholder', () => {
  const tree = renderInput();
  const { getByPlaceholderText } = tree;
  getByPlaceholderText('Your Email');
});

it('should render a textarea element', () => {
  const textarea = {
    elementtype: 'textarea',
    elementConfig: {
      placeholder: 'Enter description',
      required: true,
      invalid: 'true',
      value: 'testing text area field'
    }
  };
  const { getByPlaceholderText, getByText } = render(<Input {...textarea} />);
  const div = getByText('testing text area field');
  getByPlaceholderText('Enter description');
  expect(div.className).toBe('hello');
  expect(div.value).toBe('testing text area field');
});

it('should test for input classname to be euqal inputError', () => {
  const errorInput = {
    elementtype: 'input',
    elementConfig: {
      placeholder: 'First Name',
      required: true,
      invalid: 'true',
      type: 'text'
    },
    invalid: true,
    shouldValidate: true,
    touched: true
  };
  const { getByPlaceholderText } = render(<Input {...errorInput} />);
  const div = getByPlaceholderText('First Name');
  expect(div.className).toBe('inputField inputError');
});

it('should render a select element', () => {
  const selectElement = {
    elementtype: 'select',
    elementConfig: {
      options: [
        { value: 'savings', displayValue: 'Savings' },
        { value: 'current', displayValue: 'Current' }
      ]
    },
    validation: {
      required: false
    },
    value: 'fastest',
    valid: false
  };
  const { container } = render(<Input {...selectElement} />);
  expect(container.querySelector('select').className).toBe('hello');
});
