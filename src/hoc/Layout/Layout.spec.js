import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter, history } from 'react-router-dom';
import thunk from 'redux-thunk';
import { Layout, mapStateToProps } from './Layout.js';

configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
let layout;

let store = mockStore({});
describe('Layout', () => {
  beforeEach(() => {
    // creates the store with any initial state or middleware needed

    const initialState = {
      token: null,
      userType: 'client',
      showNavToggle: false
    };
    store = mockStore(initialState);
    layout = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Layout store={store} />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render layout', () => {
    const initialState = {
      token: null,
      userType: 'client'
    };
  });
});
