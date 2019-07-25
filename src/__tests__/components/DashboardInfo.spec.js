import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DashboardInfo from '../../components/DashboardInfo/DashboardInfo';

configure({ adapter: new Adapter() });

describe('<DashboardInfo />', () => {
  it('should render DashboardInfo', () => {
    shallow(<DashboardInfo />);
  });
});
