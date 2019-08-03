import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RightNavigationItem from './RightNavigationItems';

configure({ adapter: new Adapter() });

describe('<RightNavigationItem />', () => {

  it('should render NavigationItem', () => {
    shallow(<RightNavigationItem />);
  });

});
