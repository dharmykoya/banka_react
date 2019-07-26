import React from 'react';
import ReactDom from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ClientDetails from '../../components/ClientDetails/ClientDetails';

configure({ adapter: new Adapter() });

describe('<ClientDetails />', () => {
  it('should render ClientDetails', () => {
    shallow(<ClientDetails />);
  });
  it('should render test', () => {
    const div = document.createElement('div');

    ReactDom.render(<ClientDetails />, div);
  });
});
