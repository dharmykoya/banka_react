import * as actionTypes from '../../../store/actions/actionTypes';
import { updateObject } from '../../../helpers/helper';

const initialState = {
  error: null,
  accountDetails: null,
  userDetails: null,
  loading: true
};

const userAccountFetchStarted = (state) => {
  return updateObject(state, {
    loading: true
  });
};

const userAccountSuccess = (state, action) => {
  console.log(123, action);
  return updateObject(state, {
    accountDetails: action.userAccount[0],
    userDetails: action.userAccount.user,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.USER_ACCOUNT_FETCH_STARTED:
      return userAccountFetchStarted(state, action);
    case actionTypes.USER_ACCOUNT_SUCCESS:
      return userAccountSuccess(state, action);

    default:
      return state;
  }
};

export default reducer;
