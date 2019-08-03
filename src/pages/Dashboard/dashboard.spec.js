import React from 'react';
import { shallow, configure } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import Dashboard from './Dashboard';

configure({ adapter: new Adapter() });

// create any initial state needed
const initialState = {
  error: null,
  accountDetails: null,
  userDetails: null,
  loading: false
};
// const thunk = ({ dispatch, getState }) => (next) => (action) => {
//   if (typeof action === 'function') {
//     return action(dispatch, getState);
//   }

//   return next(action);
// };
const middlewares = [thunk];

// const create = () => {
//   const store = {
//     getState: jest.fn(() => ({})),
//     dispatch: jest.fn(),
//   };
//   const next = jest.fn()

//   const invoke = (action) => thunk(store)(next)(action)

//   return {store, next, invoke}
// };

// here it is possible to pass in any middleware if needed into //configureStore
const mockStore = configureStore(middlewares);

let store;

beforeEach(() => {
  // creates the store with any initial state or middleware needed
  // store = mockStore(initialState);
  // wrapper = shallow(<Signin store={store} />);
  jest.mock('react-redux', () => {
    return {
      connect: (mapStateToProps, mapDispatchToProps) => (Dashboard) => ({
        mapStateToProps,
        mapDispatchToProps,
        Dashboard
      }),
      Provider: ({ children }) => children
    };
  });

  store = mockStore({
    error: null,
    accountDetails: {
      account_number: '2000009193',
      balance: '12300',
      status: 'active',
      type: 'savings'
    },
    userDetails: {
      firstName: 'damilola'
    },
    isLoading: false
  });
});

it('should render Dashboard', () => {
  const props = {
    error: null,
    accountDetails: {
      account_number: '2000009193',
      balance: '12300',
      status: 'active',
      type: 'savings'
    },
    userDetails: {
      firstName: 'damilola'
    },
    isLoading: true
  };

  const wrapper = shallow(
    <Provider store={store}>
      <Dashboard {...props} />
    </Provider>
  );

  console.log(23, wrapper.debug());
});
