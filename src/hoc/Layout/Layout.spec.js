import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Layout from './Layout';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('Layout', () => {
  it('should render layout when not authenticated', () => {
    const props = {
      auth: {
        token: 'null',
        userId: null,
        userType: null,
        isAdmin: null,
        error: null,
        loading: false,
        logoutState: false,
        userDetails: null
      }
    };
    const store = mockStore({
      account: {
        error: 'some-error'
      },
      auth: {
        token: null,
        isClient: true
      }
    });
    mount(
      <Provider store={store}>
        <BrowserRouter>
          <Layout {...props} />
        </BrowserRouter>
      </Provider>
    );
  });
  it('should render the layout when authenticated', () => {
    const props = {
      auth: {
        token: 'some-token',
        userId: null,
        userType: null,
        isAdmin: null,
        error: null,
        loading: false,
        logoutState: false,
        userDetails: null,
        account: {
          error: null
        }
      },
      to: '/signin'
    };
    const store = mockStore({
      account: {
        error: 'some-error'
      },
      auth: {
        token: 'some-token',
        isClient: true
      }
    });
    const navToggleHandler = jest.fn();
    const navClicked = jest.fn();
    const event = {
      preventDefault() {},
      target: navClicked
    };
    const container = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Layout
            {...props}
            navToggleHandler={navToggleHandler}
            navClicked={navClicked}
          />
        </BrowserRouter>
      </Provider>
    );
    const hamburger = container.find('hamburger');
    hamburger.simulate('click', event);
  });
});
