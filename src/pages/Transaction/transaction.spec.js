import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import Transaction from './Transaction';

configure({ adapter: new Adapter() });
const middlewares = [thunk];

const mockStore = configureStore(middlewares);

let store;

describe('Make transaction test by staff', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => {
      return {
        connect: (mapStateToProps, mapDispatchToProps) => (Transaction) => ({
          mapStateToProps,
          mapDispatchToProps,
          Transaction
        }),
        Provider: ({ children }) => children
      };
    });
  });

  it('should render make transaction page', () => {
    store = mockStore({
      transactions: {
        loading: false
      },
      auth: {
        token: 'some-token',
        loading: false,
        userDetails: {
          firstName: 'dami',
          lastName: 'koya',
          id: 2,
          email: 'da@yahoo.com'
        },
        userType: 'staff',
        isAdmin: false
      }
    });
    const props = {
      getAccount: jest.fn(),
      transaction: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Transaction {...props} />
        </BrowserRouter>
      </Provider>
    );
    wrapper.find('#account-no').simulate('change', {
      target: { name: 'account_no', value: 200000000 }
    });
    const form = wrapper.find('#check_form');
    wrapper
      .find('#check_form')
      .simulate('submit', { preventDefault: jest.fn() });
    expect(wrapper).toBeTruthy();
  });

  it('should find a user account on the make transaction page', () => {
    store = mockStore({
      transactions: {
        loading: false,
        accountDetails: {
          account_number: 2000000003,
          balance: '170002.00',
          created_on: '2019-04-28T11:49:09.165Z',
          id: 4,
          owner: 5,
          status: 'active',
          type: 'savings',
          email: 'test@yahoo.com'
        }
      },
      auth: {
        loading: false,
        userDetails: {
          firstName: 'dami',
          lastName: 'koya',
          id: 2,
          email: 'da@yahoo.com'
        },
        userType: 'staff',
        isAdmin: false
      }
    });
    const props = {
      transactionHistory: jest.fn(),
      getAccount: jest.fn(),
      transaction: jest.fn(),
      handleTransaction: jest.fn(),
      getAccountDetails: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Transaction {...props} />
        </BrowserRouter>
      </Provider>
    );

    wrapper.find('#amount-pay').simulate('change', {
      target: { name: 'amount', value: 2000 }
    });
    wrapper.find('.hello').simulate('change', {
      target: { name: 'role', value: 'credit' }
    });
    const form = wrapper.find('#confirm_form');
    wrapper
      .find('#confirm_form')
      .simulate('submit', { preventDefault: jest.fn() });
    expect(wrapper).toBeTruthy();
  });
});
