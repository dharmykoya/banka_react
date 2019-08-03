import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableHead from './TableHead';

configure({ adapter: new Adapter() });

describe('<TableHead />', () => {
  
  it('should render TableHead', () => {
    shallow(<TableHead>Name</TableHead>);
  });

});
