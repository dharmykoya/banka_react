import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import nock from 'nock';

import * as actionTypes from '../../../store/actions/actionTypes';
import dashboardAction from './dashboard.action';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

const { fetchUserAccount, userAccountFetchStarted } = dashboardAction;

const store = mockStore({});

const userAccountDetails = {
  data: {
    '0': {
      id: 4,
      account_number: 2000000003,
      owner: 5,
      type: 'savings',
      status: 'active',
      balance: '170002.00',
      created_on: '2019-04-28T11:49:09.165Z',
      updated_at: '2019-04-28T11:49:09.165Z'
    },
    user: {
      id: 5,
      email: 'issacola57@gmail.com',
      firstName: 'isaac',
      lastName: 'olayisade',
      type: 'client',
      isAdmin: false
    }
  }
};
describe('auth actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })
  it('should create an action to start dashboard fetching', () => {
    const expectedAction = {
      type: actionTypes.USER_ACCOUNT_FETCH_STARTED
    };
    expect(userAccountFetchStarted()).toEqual(expectedAction);
  });

  // it('should create an action that fetches a user details using the userId', () => {
  //  nock('https://banktoday.herokuapp.com/api/v1/')
  //     .get('/user/1')
  //     .reply(200, userAccountDetails);

  //   return store.dispatch(fetchUserAccount(1)).then(() => {
  //     expect(store.getActions()).toMatchSnapshot();
  //   });
  // });

  // it('should return error when trying to fetch a request', () => {
  //   nock('https://banktoday.herokuapp.com/api/v1/')
  //     .get('/user/')
  //     .reply(422, ['invalid value']);

  //   return store.dispatch(fetchUserAccount()).then(() => {
  //     expect(store.getActions()).toMatchSnapshot();
  //   });
  // });
});
