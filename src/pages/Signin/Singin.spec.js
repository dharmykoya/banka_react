import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signin from './Signin';

configure({ adapter: new Adapter() });

describe('<Signin />', () => {
  it('should render Homepage', () => {
    shallow(<Signin />);
  });
});
