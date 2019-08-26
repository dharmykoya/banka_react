import React from 'react';
// import '@babel/polyfill';
import moxios from 'moxios';
import { mount, configure } from 'enzyme';
import transactionReducer from './transaction.reducer';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { BrowserRouter, history } from 'react-router-dom';
import thunk from 'redux-thunk';
import action from './transaction.action';
const {
  getAccountDetail,
  creditDebitStart,
  creditDebitSuccess,
  creditDebitFail,
  makeTransaction
} = action;
import {
  CREDIT_DEBIT_FAIL,
  CREDIT_DEBIT_START,
  CREDIT_DEBIT_SUCCESS,
  GET_CRREDIT_DEBIT_ACCOUNT_DETAILS
} from '../../../store/actions/actionTypes';

configure({ adapter: new Adapter() });

const middlewares = [thunk]; // add your middlewares like `redux-thunk`
const mockStore = configureStore(middlewares);

let store = mockStore({});

const getAccountResponse = {
  status: 200,
  data: {
    id: 4,
    account_number: 2000000003,
    owner: 5,
    type: 'savings',
    status: 'active',
    balance: '150002.00',
    created_on: '2019-04-28T11:49:09.165Z',
    updated_at: '2019-04-28T11:49:09.165Z',
    email: 'issacola57@gmail.com',
    fName: 'isaac',
    lName: 'olayisade',
    imageURL:
      'http://res.cloudinary.com/banka/image/upload/v1564586959/eeqg0tki1qcdkka92wvm.jpg'
  }
};

const makeTransactionResponse = {
  status: 201,
  data: {
    transactionId: 36,
    accountNumber: 2000000003,
    amount: '40000.00',
    cashier: 2,
    transactionType: 'credit',
    accountBalance: '130002'
  }
};

const getAccountError = {
  status: 400,
  error: 'Account number not found'
};

const makeTransactionError = { status: 422, error: ['Please input a number'] };
describe('Transaction Actions', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());

  it('should dispatch creditDebit start', () => {
    const expectedActions = [{ type: 'CREDIT_DEBIT_START' }];

    store.dispatch(creditDebitStart());

    expect(store.getActions()).toEqual(expectedActions);
  });

  it('dispatches getAccountDetails transaction', (done) => {
    const accountNumber = 2000000003;
    const token = 'some-token';
    moxios.stubRequest(
      `https://banktoday.herokuapp.com/api/v1/accounts/${accountNumber}`,
      {
        status: 200,
        response: getAccountResponse
      }
    );

    const expectedActions = [
      { type: 'CREDIT_DEBIT_START' },
      {
        type: 'GET_CRREDIT_DEBIT_ACCOUNT_DETAILS',
        accountDetails: {
          id: 4,
          account_number: 2000000003,
          owner: 5,
          type: 'savings',
          status: 'active',
          balance: '150002.00',
          created_on: '2019-04-28T11:49:09.165Z',
          updated_at: '2019-04-28T11:49:09.165Z',
          email: 'issacola57@gmail.com',
          fName: 'isaac',
          lName: 'olayisade',
          imageURL:
            'http://res.cloudinary.com/banka/image/upload/v1564586959/eeqg0tki1qcdkka92wvm.jpg'
        }
      }
    ];
    store = mockStore({});

    store.dispatch(getAccountDetail(accountNumber, token)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });

  it('should dispatch make transaction request', (done) => {
    const accountNumber = 2000000003;
    const token = 'some-token';
    const transactionType = 'credit';
    const amount = 30000;
    moxios.stubRequest(
      `https://banktoday.herokuapp.com/api/v1/transactions/${accountNumber}/${transactionType}`,
      {
        status: 201,
        response: makeTransactionResponse
      }
    );

    const expectedActions = [
      { type: 'CREDIT_DEBIT_START' },
      {
        type: 'CREDIT_DEBIT_SUCCESS',
        transactionDetails: {
          transactionId: 36,
          accountNumber: 2000000003,
          amount: '40000.00',
          cashier: 2,
          transactionType: 'credit',
          accountBalance: '130002'
        }
      }
    ];
    store = mockStore({});

    store
      .dispatch(makeTransaction(accountNumber, transactionType, amount, token))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });

  it('should dispatch getAccountDetails transaction error', (done) => {
    const accountNumber = 2000000003;
    const token = 'some-token';
    moxios.stubRequest(
      `https://banktoday.herokuapp.com/api/v1/accounts/${accountNumber}`,
      {
        status: 400,
        response: getAccountError
      }
    );

    const expectedActions = [
      { type: 'CREDIT_DEBIT_START' },
      { type: 'CREDIT_DEBIT_FAIL', error: 'Account number not found' }
    ];
    store = mockStore({});

    store.dispatch(getAccountDetail(accountNumber, token)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
    done();
  });

  it('should dispatch getAccountDetails transaction error', (done) => {
    const accountNumber = 2000000003;
    const token = 'some-token';
    const transactionType = 'credit';
    const amount = 30000;
    moxios.stubRequest(
      `https://banktoday.herokuapp.com/api/v1/transactions/${accountNumber}/${transactionType}`,
      {
        status: 422,
        response: makeTransactionError
      }
    );

    const expectedActions = [
      { type: 'CREDIT_DEBIT_START' },
      { type: 'CREDIT_DEBIT_FAIL', error: ['Please input a number'] }
    ];
    store = mockStore({});

    store
      .dispatch(makeTransaction(accountNumber, transactionType, amount, token))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    done();
  });
});

describe('Transaction Reducers', () => {
  const initialState = {
    accountDetails: null,
    transactionType: null,
    transactionDetails: null,
    error: null,
    loading: false
  };
  it('Should return default state', () => {
    const newState = transactionReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  it('Should return a new state if it recieves CREDIT_DEBIT_START in action type', () => {
    const state = {
      accountDetails: null,
      transactionType: null,
      transactionDetails: null,
      error: null,
      loading: true
    };
    const newState = transactionReducer(initialState, {
      type: CREDIT_DEBIT_START
    });
    expect(newState).toEqual(state);
  });
  it('Should return a new state if it recieves CREDIT_DEBIT_START in action type', () => {
    const state = {
      accountDetails: {
        ...getAccountResponse.data
      },
      transactionType: null,
      transactionDetails: null,
      error: null,
      loading: false
    };
    const newState = transactionReducer(initialState, {
      type: GET_CRREDIT_DEBIT_ACCOUNT_DETAILS,
      accountDetails: {
        ...getAccountResponse.data
      }
    });
    expect(newState).toEqual(state);
  });

  it('Should return a new state if it recieves CREDIT_DEBIT_SUCCESS in action type', () => {
    const state = {
      accountDetails: null,
      transactionType: null,
      transactionDetails: {
        ...makeTransactionResponse.data
      },
      error: null,
      loading: false
    };
    const newState = transactionReducer(initialState, {
      type: CREDIT_DEBIT_SUCCESS,
      transactionDetails: {
        ...makeTransactionResponse.data
      }
    });
    expect(newState).toEqual(state);
  });

  it('Should return a new state if it recieves CREDIT_DEBIT_FAIL in action type', () => {
    const state = {
      accountDetails: null,
      transactionType: null,
      transactionDetails: null,
      error: getAccountError,
      loading: false
    };
    const newState = transactionReducer(initialState, {
      type: CREDIT_DEBIT_FAIL,
      error: getAccountError
    });
    expect(newState).toEqual(state);
  });
});
