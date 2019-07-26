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
