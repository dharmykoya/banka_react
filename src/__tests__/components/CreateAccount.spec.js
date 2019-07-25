import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CreateAccount from '../../pages/CreateAccount/CreateAccount';

configure({ adapter: new Adapter() });

describe('<HomePage />', () => {
  it('should render Homepage', () => {
    shallow(<CreateAccount />);
  });
});
