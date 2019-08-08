import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
// import mockAxios from '../../../__mocks__/axios.mock';

import * as actionTypes from '../../../store/actions/actionTypes';
import authAction from './auth.action';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

const { authStart, authSuccess, authFail, auth } = authAction;

const store = mockStore({});

const authData = {
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJlbWFpbCI6ImRoYXJteWtveWEzOEBnbWFpbC5jb20iLCJmaXJzdE5hbWUiOiJEYW1pbG9sYSIsImxhc3ROYW1lIjoiQWRla295YSIsInR5cGUiOiJzdGFmZiIsImlzQWRtaW4iOnRydWV9LCJpYXQiOjE1NjQzNTA2NzYsImV4cCI6MTU2NDM3NTg3Nn0.d5wuDRAt3h8Y538oXpNgySJgup-CoSEtxdYIJnQ1jBI',
  id: 1,
  email: 'dharmykoya38@gmail.com',
  firstName: 'Damilola',
  lastName: 'Adekoya',
  type: 'staff',
  isAdmin: true,
  imageURL:
    'http://res.cloudinary.com/banka/image/upload/v1559467148/qwj7suebb4iprpdk2xop.jpg'
};
describe('auth actions', () => {
  it('should create an action to start auth', () => {
    const expectedAction = {
      type: actionTypes.AUTH_START
    };
    expect(authStart()).toEqual(expectedAction);
  });

  it('should create an action to successful auth', async () => {
    const expectedAction = [
      {
        type: actionTypes.AUTH_SUCCESS,
        authData
      }
    ];
    await store.dispatch(authSuccess(authData));
    expect(store.getActions()).toEqual(expectedAction);
    expect(authSuccess(authData)).toEqual(...expectedAction);
  });

  it('should execute fetch data', async () => {
    moxios.stubRequest('/api/v1/users/signin', {
      status: 201,
      response: authData
    });
    const loginDetails = {
      email: 'dharmykoyta38@gmail.com',
      password: 'BankappClient132@'
    };
    const expectedAction = [
      {
        type: actionTypes.AUTH_SUCCESS,
        authData
      },
      { type: 'AUTH_START' }
    ];

    await store.dispatch(auth(loginDetails));
    expect(store.getActions()).toEqual(expectedAction);
  });

  it('should create an action for failed auth', () => {
    const error = 'something went wrong';
    const expectedAction = {
      type: actionTypes.AUTH_FAIL,
      error
    };
    expect(authFail(error)).toEqual(expectedAction);
  });
});
