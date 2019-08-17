import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signup from './Signup';

configure({ adapter: new Adapter() });

describe('<Signup />', () => {
  const props = {
    nameClass: 'input',
    children: 'submit',
    disabled: true
  };

  it('should render Button', () => {
    shallow(<Signup {...props} />);
  });
});
