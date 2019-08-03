import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableData from './TableData';

configure({ adapter: new Adapter() });

describe('<TableData />', () => {
  
  it('should render NavigationItem', () => {
    shallow(<TableData>Name</TableData>);
  });

});
