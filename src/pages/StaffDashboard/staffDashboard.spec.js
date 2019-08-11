import React from 'react';
import { mount, configure } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';

import StaffDashboard from './StaffDashboard';

configure({ adapter: new Adapter() });
const middlewares = [thunk];

const mockStore = configureStore(middlewares);

let store;

describe('Staff Dashboard Page', () => {
  beforeEach(() => {
    jest.mock('react-redux', () => {
      return {
        connect: (mapStateToProps, mapDispatchToProps) => (StaffDashboard) => ({
          mapStateToProps,
          mapDispatchToProps,
          StaffDashboard
        }),
        Provider: ({ children }) => children
      };
    });
  });

  it('should render StaffDashboard page ', () => {
    store = mockStore({
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
    const wrapper = mount(
      <Provider store={store}>
        <StaffDashboard />
      </Provider>
    );

    const staffRole = wrapper.find('#staff-role');
    expect(staffRole).toBeTruthy();
  });

  it('should render StaffDashboard page with loading Icon', () => {
    store = mockStore({
      auth: {
        loading: true,
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
    const wrapper = mount(
      <Provider store={store}>
        <StaffDashboard />
      </Provider>
    );

    const loading = wrapper.find('pageLoading');
    expect(loading).toBeTruthy();
  });
});
