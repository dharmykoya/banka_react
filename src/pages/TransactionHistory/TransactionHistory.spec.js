import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import TransactionHistory from './TransactionHistory';

configure({ adapter: new Adapter() });
const middlewares = [thunk];

const mockStore = configureStore(middlewares);

let store;

describe('TransactionHistory Page', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => {
      return {
        connect: (mapStateToProps, mapDispatchToProps) => (
          TransactionHistory
        ) => ({
          mapStateToProps,
          mapDispatchToProps,
          TransactionHistory
        }),
        Provider: ({ children }) => children
      };
    });
  });

  it('should render TransactionHistory page ', () => {
    store = mockStore({
      transactionHistory: {
        loading: false,
        accountTransactions: [
          {
            id: 6,
            type: 'credit',
            account_number: 2000000003,
            cashier: 1,
            amount: '5000.00',
            old_balance: '2002.00',
            new_balance: '7002.00',
            created_on: '2019-04-28T12:43:23.702Z'
          },
          {
            id: 7,
            type: 'credit',
            account_number: 2000000003,
            cashier: 1,
            amount: '50000.00',
            old_balance: '20002.00',
            new_balance: '70002.00',
            created_on: '2019-04-28T12:43:23.702Z'
          }
        ]
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
      },
      account: {
        loading: false,
        userDetails: {
          firstName: 'dami',
          lastName: 'koya',
          id: 2,
          email: 'da@yahoo.com'
        },
        accountDetails: {
          account_number: 2000000003,
          balance: '170002.00',
          created_on: '2019-04-28T11:49:09.165Z',
          id: 4,
          owner: 5,
          status: 'active',
          type: 'savings'
        }
      }
    });
    const props = {
      transactionHistory: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <TransactionHistory {...props} />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper).toBeTruthy();
  });

  it('should render TransactionHistory page ', () => {
    store = mockStore({
      transactionHistory: {
        loading: true,
        accountTransactions: [
          {
            id: 6,
            type: 'credit',
            account_number: 2000000003,
            cashier: 1,
            amount: '5000.00',
            old_balance: '2002.00',
            new_balance: '7002.00',
            created_on: '2019-04-28T12:43:23.702Z'
          },
          {
            id: 7,
            type: 'credit',
            account_number: 2000000003,
            cashier: 1,
            amount: '50000.00',
            old_balance: '20002.00',
            new_balance: '70002.00',
            created_on: '2019-04-28T12:43:23.702Z'
          }
        ]
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
      },
      account: {
        loading: false,
        userDetails: {
          firstName: 'dami',
          lastName: 'koya',
          id: 2,
          email: 'da@yahoo.com'
        },
        accountDetails: {
          account_number: 2000000003,
          balance: '170002.00',
          created_on: '2019-04-28T11:49:09.165Z',
          id: 4,
          owner: 5,
          status: 'active',
          type: 'savings'
        }
      }
    });
    const props = {
      transactionHistory: jest.fn()
    };
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <TransactionHistory {...props} />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper).toBeTruthy();
  });
});
