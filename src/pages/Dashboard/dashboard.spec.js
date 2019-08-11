import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

import Dashboard from './Dashboard';

configure({ adapter: new Adapter() });

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

let store;

describe('Dashboard', () => {
  describe('default dashboard', () => {
    beforeEach(() => {
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
    });
    it('should render an active account Dashboard', () => {
      store = mockStore({
        error: null,
        account: {
          accountDetails: {
            account_number: '2000009193',
            balance: '12300',
            status: 'active',
            type: 'savings'
          },
          userDetails: {
            firstName: 'damilola',
            lastName: 'Adekoya',
            email: 'dam@yahoo.com'
          }
        },
        auth: {
          userId: 2
        },
        isLoading: false
      });

      const wrapper = mount(
        <Provider store={store}>
          <Dashboard />
        </Provider>
      );

      const statusNode = wrapper.find('#status');
      expect(statusNode.text()).toEqual('Status:ACTIVE');
    });
    it('should render a Dormant account on the Dashboard', () => {
      store = mockStore({
        error: null,
        account: {
          accountDetails: {
            account_number: '2000009193',
            balance: '12300',
            status: 'dormant',
            type: 'current'
          },
          userDetails: {
            firstName: 'damilola',
            lastName: 'Adekoya',
            email: 'dam@yahoo.com'
          }
        },
        auth: {
          userId: 2
        },
        isLoading: false
      });
      const wrapper = mount(
        <Provider store={store}>
          <Dashboard />
        </Provider>
      );

      const statusNode = wrapper.find('#status');
      expect(statusNode.text()).toEqual('Status:DORMANT');
    });
  });

  describe('dashboard with loading props', () => {
    beforeEach(() => {
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
        account: {
          accountDetails: {
            account_number: '2000009193',
            balance: '12300',
            status: 'active',
            type: 'savings'
          },
          userDetails: {
            firstName: 'damilola',
            lastName: 'Adekoya',
            email: 'dam@yahoo.com'
          },
          loading: true
        },
        auth: {
          userId: 2
        },
        isLoading: true
      });
    });

    it('should render Dashboard', () => {
      const wrapper = mount(
        <Provider store={store}>
          <BrowserRouter>
            <Dashboard />
          </BrowserRouter>
        </Provider>
      );
    });
  });
});
