import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Transaction from './Transaction';

configure({ adapter: new Adapter() });

describe('<Transaction />', () => {
  it('should render Transaction', () => {
    shallow(<Transaction />);
  });
});
