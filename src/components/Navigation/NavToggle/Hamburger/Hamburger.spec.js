import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Hamburger from './Hamburger';

configure({ adapter: new Adapter() });

describe('<Hamburger />', () => {
  const props = {
    navClicked: jest.fn()
  };
  it('should render the Hamburger component', () => {
    shallow(<Hamburger {...props} />);
  });
});
