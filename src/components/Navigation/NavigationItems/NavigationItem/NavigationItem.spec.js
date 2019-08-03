import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NavigationItem from './NavigationItem';

configure({ adapter: new Adapter() });

describe('<NavigationItem />', () => {
  const props = {
    link: '/dashboard'
  };


  it('should render NavigationItem', () => {
    shallow(<NavigationItem {...props} >Dashboard</NavigationItem>);
  });

});
