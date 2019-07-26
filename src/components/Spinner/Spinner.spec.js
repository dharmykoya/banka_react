import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Spinner from './Spinner';

configure({ adapter: new Adapter() });

describe('<Spinner />', () => {
  it('should render Spinner', () => {
    shallow(<Spinner />);
  });
});
