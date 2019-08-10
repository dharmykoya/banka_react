import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import * as actionTypes from '../../../store/actions/actionTypes';
import authAction from './auth.action';

const { authStart, authSuccess, authFail, auth, authCheckState } = authAction;
import authReducer from '../store/auth.reducer';

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

let store = mockStore({});

const authData = {
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9-',
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
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  it('should create an action to start auth', () => {
    const expectedAction = {
      type: actionTypes.AUTH_START
    };
    expect(authStart()).toEqual(expectedAction);
  });

  it('should create an action to successful auth', async () => {
    const expectedAction = [
      {
        type: 'AUTH_SUCCESS',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9-',
        authData: {
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9-',
          id: 1,
          email: 'dharmykoya38@gmail.com',
          firstName: 'Damilola',
          lastName: 'Adekoya',
          type: 'staff',
          isAdmin: true,
          imageURL:
            'http://res.cloudinary.com/banka/image/upload/v1559467148/qwj7suebb4iprpdk2xop.jpg'
        }
      }
    ];

    expect(authSuccess(authData.token, authData)).toEqual(...expectedAction);
  });

  it('should execute fetch data', async () => {
    moxios.stubRequest('https://banktoday.herokuapp.com/api/v1/auth/signin', {
      status: 201,
      response: authData
    });
    const loginDetails = {
      email: 'dharmykoya38@gmail.com',
      password: 'BankappClient132@'
    };
    const expectedAction = [
      {
        type: actionTypes.AUTH_SUCCESS,
        authData
      },
      { type: 'AUTH_START' }
    ];
    store = mockStore({});

    store.dispatch(auth(loginDetails)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
  });

  it('should create an action for failed auth', () => {
    const error = 'something went wrong';
    const expectedAction = {
      type: actionTypes.AUTH_FAIL,
      error
    };
    expect(authFail(error)).toEqual(expectedAction);
  });

  describe('Test for reducers', () => {
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

    it('Should return default state', () => {
      const newState = authReducer(undefined, {});

      expect(newState).toEqual(initialState);
    });

    it('Should return a new state if it recieves AUTH_START in action type', () => {
      const state = {
        token: null,
        userId: null,
        userType: null,
        isAdmin: null,
        error: null,
        loading: true,
        logoutState: false,
        userDetails: null
      };
      const newState = authReducer(initialState, {
        type: actionTypes.AUTH_START
      });

      expect(newState).toEqual(state);
    });

    it('Should return a new state if it recieves AUTH_SUCCESS in action type', () => {
      const state = {
        token: 'some-token',
        userId: 3,
        userType: 'client',
        isAdmin: false,
        error: null,
        loading: false,
        logoutState: false,
        userDetails: {
          id: 3,
          type: 'client',
          isAdmin: false
        }
      };
      const newState = authReducer(initialState, {
        type: actionTypes.AUTH_SUCCESS,
        token: 'some-token',
        authData: {
          id: 3,
          type: 'client',
          isAdmin: false
        }
      });

      expect(newState).toEqual(state);
    });

    it('Should return a new state if it recieves AUTH_FAIL in action type', () => {
      const state = {
        token: null,
        userId: null,
        userType: null,
        isAdmin: null,
        error: { firstName: 'first name is incorrect' },
        loading: false,
        logoutState: false,
        userDetails: null
      };
      const newState = authReducer(initialState, {
        type: actionTypes.AUTH_FAIL,
        error: { firstName: 'first name is incorrect' }
      });

      expect(newState).toEqual(state);
    });

    it('Should return a new state if it recieves AUTH_LOGOUT in action type', () => {
      const state = {
        token: null,
        userId: null,
        userType: null,
        isAdmin: null,
        error: null,
        loading: false,
        logoutState: true,
        userDetails: null
      };
      const newState = authReducer(initialState, {
        type: actionTypes.AUTH_LOGOUT
      });

      expect(newState).toEqual(state);
    });
  });
});
