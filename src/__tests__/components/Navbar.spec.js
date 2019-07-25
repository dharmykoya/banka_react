import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Navbar from '../../components/Navbar/Navbar';

configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
  it('should render Navbar', () => {
    shallow(<Navbar />);
  });
});
