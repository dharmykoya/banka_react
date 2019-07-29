import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavToggle from './NavToggle';

configure({ adapter: new Adapter() });

describe('<NavToggle />', () => {
  const props = {
    open: true
  }
  const prop = {
    open: false
  }
  it('should render a default Navtoggle component', () => {
    shallow(<NavToggle {...prop}  />)
  });
  it('should render NavToggle component when it is opened', () => {
    shallow(<NavToggle {...props} />)
  });
});