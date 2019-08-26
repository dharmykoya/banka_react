import * as actionTypes from '../../../store/actions/actionTypes';
import { updateObject } from '../../../helpers/helper';

const initialstate = {
  accountDetails: null,
  transactionType: null,
  transactionDetails: null,
  error: null,
  loading: false
};

const creditDebitStart = (state) => {
  return updateObject(state, {
    loading: true
  });
};

const getAccountSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    accountDetails: action.accountDetails
  });
};

const creditDebitSuccess = (state, action) => {
  return updateObject(state, {
    loading: false,
    transactionDetails: action.transactionDetails,
    accountDetails: null
  });
};

const creditDebitFail = (state, action) => {
  return updateObject(state, {
    loading: false,
    error: action.error
  });
};

const reducer = (state = initialstate, action) => {
  switch (action.type) {
    case actionTypes.CREDIT_DEBIT_START:
      return creditDebitStart(state, action);

    case actionTypes.GET_CRREDIT_DEBIT_ACCOUNT_DETAILS:
      return getAccountSuccess(state, action);

    case actionTypes.CREDIT_DEBIT_SUCCESS:
      return creditDebitSuccess(state, action);

    case actionTypes.CREDIT_DEBIT_FAIL:
      return creditDebitFail(state, action);

    default:
      return state;
  }
};

export default reducer;
