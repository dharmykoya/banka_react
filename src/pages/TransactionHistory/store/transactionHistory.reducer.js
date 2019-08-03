import * as actionTypes from '../../../store/actions/actionTypes';
import { updateObject } from '../../../helpers/helper';

const initialState = {
  error: null,
  accountTransactions: null,
  loading: true
};

const transactionHistoryStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: true
  });
};

const transactionHistorySuccess = (state, action) => {
  return updateObject(state, {
    accountTransactions: action.transactionsList,
    loading: false
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TRANSACTION_HISTORY_START:
      return transactionHistoryStart(state, action)
    case actionTypes.TRANSACTION_HISTORY_SUCCESS:
      return transactionHistorySuccess(state, action);

    default:
      return state;
  }
};

export default reducer;
