import React from 'react';
import { mount, configure } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import Signup from './Signup';

configure({ adapter: new Adapter() });
const middlewares = [thunk];

const mockStore = configureStore(middlewares);

let store;

const localStorageMock = {
  getItem: () => jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};

global.localStorage = localStorageMock;

describe('Signin', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => {
      return {
        connect: (mapStateToProps, mapDispatchToProps) => (Signup) => ({
          mapStateToProps,
          mapDispatchToProps,
          Signup
        }),
        Provider: ({ children }) => children
      };
    });
  });

  it('should render signin page with invalid form input', () => {
    store = mockStore({
      token: null,
      userId: null,
      userType: null,
      isAdmin: null,
      error: null,
      loading: false,
      logoutState: false,
      userDetails: null,
      auth: {
        userId: 2,
        loading: false
      },
      account: {
        error: 'null'
      }
    });

    const props = {
      onAuth: jest.fn(),
      signinHandler: jest.fn(),
      onSubmit: jest.fn(),
      signup: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Signup {...props} />
        </BrowserRouter>
      </Provider>
    );

    wrapper.find('#firstName').simulate('change', {
      target: { name: 'email', value: 'damilola' }
    });

    wrapper.find('#lastName').simulate('change', {
      target: { name: 'email', value: 'damilola' }
    });

    wrapper.find('#login-email').simulate('change', {
      target: { name: 'email', value: 'dam@yahoo.com' }
    });

    wrapper.find('#login-password').simulate('change', {
      target: { name: 'password', value: 'BankappClient132@' }
    });

    wrapper.find('#login-password-2').simulate('change', {
      target: { name: 'password', value: 'BankappClient132@' }
    });
    wrapper.find('form').simulate('submit', { preventDefault() {} }); // test to see arguments used after its been submitted
  });

  it('should render signin page', () => {
    store = mockStore({
      loading: false,
      logoutState: false,
      userDetails: null,
      auth: {
        userId: 2,
        loading: true,
        userType: 'client',
        token: 'some',
        error: 'some-error'
      },
      account: {
        error: 'null'
      }
    });

    const props = {
      onAuth: jest.fn(),
      signinHandler: jest.fn(),
      onSubmit: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Signup {...props} />
        </BrowserRouter>
      </Provider>
    );

    const spinner = wrapper.find('.spinner');
    expect(spinner).toBeTruthy();
  });
});
