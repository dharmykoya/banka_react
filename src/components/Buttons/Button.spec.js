import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  const props = {
    nameClass: 'input',
    children: 'submit',
    disabled: true
  };

  const prop = {
    nameClass: 'buttonInput',
    children: 'submit',
    disabled: false
  };
  it('should render Button', () => {
    shallow(<Button {...props} />);
  });

  it('should render a disabled Button', () => {
    shallow(<Button {...prop} />);
  });
});
