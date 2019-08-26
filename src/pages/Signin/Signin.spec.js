import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import Signin from './Signin';

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
        connect: (mapStateToProps, mapDispatchToProps) => (Signin) => ({
          mapStateToProps,
          mapDispatchToProps,
          Signin
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
      }
    });

    const props = {
      onAuth: jest.fn(),
      signinHandler: jest.fn(),
      onSubmit: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <Signin {...props} />
      </Provider>
    );

    wrapper.find('#login-email').simulate('change', {
      target: { name: 'email', value: 'dam@yahoo.com' }
    });

    wrapper.find('#login-password').simulate('change', {
      target: { name: 'password', value: 'BankappClient132@' }
    });

    wrapper.find('form').simulate('submit', { preventDefault() {} }); // test to see arguments used after its been submitted
  });

  it('should render signin page with valid input', () => {
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
      }
    });

    const props = {
      onAuth: jest.fn(),
      signinHandler: jest.fn(),
      onSubmit: jest.fn(),
      state: {
        userData: {
          email: {
            elementtype: 'input',
            elementConfig: {
              type: 'email',
              placeholder: 'Your Email',
              required: true,
              id: 'login-email',
              name: 'email'
            },
            value: '',
            validation: {
              required: true
            },
            valid: true,
            touched: true
          },
          password: {
            elementtype: 'input',
            elementConfig: {
              type: 'password',
              placeholder: 'Your Password',
              required: true,
              id: 'login-password',
              name: 'password'
            },
            value: '',
            validation: {
              required: true,
              minLength: 6
            },
            valid: true,
            touched: true
          }
        },
        formIsValid: true
      }
    };
    const wrapper = mount(
      <Provider store={store}>
        <Signin {...props} />
      </Provider>
    );

    wrapper.find('#login-email').simulate('change', {
      target: { name: 'email', value: 'dam@yahoo.com' }
    });

    wrapper.find('#login-password').simulate('change', {
      target: { name: 'password', value: 'BankappClient132@' }
    });

    wrapper.find('form').simulate('submit', { preventDefault() {} }); // test to see arguments used after its been submitted
  });

  it('should render signin page', () => {
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
        loading: true
      }
    });

    const props = {
      onAuth: jest.fn(),
      signinHandler: jest.fn(),
      onSubmit: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <Signin {...props} />
      </Provider>
    );

    const spinner = wrapper.find('.spinner');
    expect(spinner).toBeTruthy();
  });

  it('should render signin page', () => {
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
        loading: false,
        error: 'first name can not be empty'
      }
    });

    const props = {
      onAuth: jest.fn(),
      signinHandler: jest.fn(),
      onSubmit: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <Signin {...props} />
      </Provider>
    );
    const errorMessage = wrapper.find('h3.message');
    expect(errorMessage).toBeTruthy();
  });
});
