import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Toolbar from './Toolbar';

configure({ adapter: new Adapter() });

describe('<Toolbar />', () => {
 


  it('should render NavigationItem', () => {
    const props = {
      navClicked: jest.fn()
    };
    shallow(<Toolbar {...props} />);
  });

  it('should render NavigationItem when authenticated', () => {
    const props = {
      navClicked: jest.fn(),
      isAuthenticated: true
    };
    shallow(<Toolbar {...props} />);
  });

});
