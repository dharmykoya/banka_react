import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TableRow from './TableRow';

configure({ adapter: new Adapter() });

describe('<TableRow />', () => {
  const props = {
    th: ['test']
  };

  const prop = {
    td: ['tester']
  };
  it('should render TableRow', () => {
    shallow(<TableRow {...props} />);
  });

  it('should render a disabled TableRow', () => {
    shallow(<TableRow {...prop} />);
  });
});
