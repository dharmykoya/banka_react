import nock from 'nock';

import * as actionTypes from '../../../store/actions/actionTypes';
import dashboardAction from './dashboard.action';

const { userAccountFetchStarted } = dashboardAction;

describe('auth actions', () => {
  afterEach(() => {
    nock.cleanAll();
  });
  it('should create an action to start dashboard fetching', () => {
    const expectedAction = {
      type: actionTypes.USER_ACCOUNT_FETCH_STARTED
    };
    expect(userAccountFetchStarted()).toEqual(expectedAction);
  });
});
