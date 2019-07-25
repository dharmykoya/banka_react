import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../components/Buttons/Button';

configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('should render Button', () => {
    shallow(<Button />);
  });
});
