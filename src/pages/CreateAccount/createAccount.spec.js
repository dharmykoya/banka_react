import React from 'react';
import { mount, configure } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import CreateAccount from './CreateAccount';

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

describe('CreateAccount', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => {
      return {
        connect: (mapStateToProps, mapDispatchToProps) => (CreateAccount) => ({
          mapStateToProps,
          mapDispatchToProps,
          CreateAccount
        }),
        Provider: ({ children }) => children
      };
    });
  });

  it('should render CreateAccount page', () => {
    store = mockStore({
      auth: {
        userId: 2,
        loading: false
      },
      account: {
        error: 'null'
      },
      createAccount: {}
    });

    const props = {
      createAccountHandler: jest.fn(),
      inputChangedHandler: jest.fn(),
      onSubmit: jest.fn(),
      createNewAccount: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <CreateAccount {...props} />
        </BrowserRouter>
      </Provider>
    );
  });
});
