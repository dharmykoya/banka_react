import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, fireEvent, cleanup } from '@testing-library/react';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Signin, mapStateToProps, mapDispatchToProps } from './Signin';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import authReducer from './store/auth.reducer';
const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

// create any initial state needed
const initialState = {
  token: null,
  userId: null,
  userType: null,
  isAdmin: null,
  error: null,
  loading: false,
  logoutState: false,
  userDetails: null
};
const props = {
  onAuth: jest.fn()
};

let store = mockStore(initialState);

function renderWithRedux(
  ui,
  { initialState, store = createStore(authReducer, initialState) } = {}
) {
  return {
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
    store
  };
}

beforeEach(() => {
  cleanup;
});

describe('Signin Page', () => {
  // it('can render with redux with defaults', () => {
  //   const state = {
  //     token: 'some-token',
  //     userId: 1,
  //     userType: 'client',
  //     isAdmin: false,
  //     error: null,
  //     loading: false,
  //     logoutState: false,
  //     userDetails: null
  //   };
  //   const { debug, container, getByTestId, getByText } = renderWithRedux(
  //     <Signin />,
  //     state
  //   );

  //   // debug(container);
  // });
  it('should render signin page', () => {
    const props = {
      onAuth: jest.fn()
    };
    const handleSubmit = jest.fn();
    const signinHandler = jest.fn();
    const {
      debug,
      container,
      getByTestId,
      getByText,
      getByPlaceholderText
    } = renderWithRedux(
      <Signin signinHandler={jest.fn()} {...handleSubmit} {...props} />
    );

    const loginForm = container.querySelector('form');
    const loginF = getByTestId('form');
    const email = getByPlaceholderText('Your Email');
    const password = getByPlaceholderText('Your Password');
    const login = getByText('Login');

    email.value = 'dharmykoya38@gmail.com';
    password.value = 'Bank123@';
    loginForm.addEventListener('submit', signinHandler);
    fireEvent.submit(loginF);
    fireEvent.click(login);
    expect(signinHandler).toHaveBeenCalledTimes(1);
    expect(login.type).toBe('submit');
    // debug(fireEvent.click(login).mock);
    const onAuth = jest.fn();
    const dispatch = jest.fn();

    // mapDispatchToProps(dispatch).onAuth();
    // expect(onAuth).toHaveBeenCalledTimes(1);

    expect;
  });
});
