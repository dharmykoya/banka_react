import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ClientDetails from '../../components/ClientDetails/ClientDetails';

configure({ adapter: new Adapter() });

describe('<ClientDetails />', () => {
  it('should render ClientDetails', () => {
    shallow(<ClientDetails />);
  });
});
