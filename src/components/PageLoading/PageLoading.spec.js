import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Pageloading from './Pageloading';

configure({ adapter: new Adapter() });

describe('<Pageloading />', () => {

  it('should render NavigationItem', () => {
    shallow(<Pageloading />);
  });

});
