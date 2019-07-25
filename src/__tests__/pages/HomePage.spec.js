import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HomePage from '../../pages/HomePage/HomePage';

configure({ adapter: new Adapter() });

describe('<HomePage />', () => {
  it('should render Homepage', () => {
    shallow(<HomePage />);
  });
});
