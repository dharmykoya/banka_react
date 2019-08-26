import * as actionTypes from '../../store/actions/actionTypes';
import { updateObject } from '../../helpers/helper';

const initialstate = {
  accountDetails: null,
  error: null,
  loading: false
};

const createAccountStart = (state) => {
  return updateObject(state, {
    loading: true
  });
};

const createAccountSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    accountDetails: action.accountDetails
  });
};

const createAccountFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.CREATE_ACCOUNT_START:
      return createAccountStart(state, action);

    case actionTypes.CREATE_ACCOUNT_SUCCESS:
      return createAccountSuccess(state, action);

    case actionTypes.CREATE_ACCOUNT_FAIL:
      return createAccountFail(state, action);

    default:
      return state;
  }
};

export default reducer;
