import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import InputField from '../../components/InputField/InputField';

configure({ adapter: new Adapter() });

describe('<InputField />', () => {
  it('should render InputField', () => {
    shallow(<InputField />);
  });
});
