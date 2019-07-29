import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import { Signin } from './Signin';

configure({ adapter: new Adapter() });

// create any initial state needed
const initialState = { token: null, userId: null, error: null, loading: false };
const middlewares = [];

// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore(middlewares);


let store;

beforeEach(() => {
  // creates the store with any initial state or middleware needed
  store = mockStore(initialState);
  // wrapper = shallow(<Signin store={store} />);
});

it('should render Signin', () => {
  shallow(<Signin store={store} />);
});
