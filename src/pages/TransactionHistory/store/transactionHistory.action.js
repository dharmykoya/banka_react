import axios from '../../../axios-auth';
import * as actionTypes from '../../../store/actions/actionTypes';


const transactionHistorySuccess = (transactionsList) => {
  return {
    type: actionTypes.TRANSACTION_HISTORY_SUCCESS,
    transactionsList
  };
};

const transactionHistoryStart = () => ({
  type: actionTypes.TRANSACTION_HISTORY_START
});

const transactionHistoryFetch = (accountNumber) => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    dispatch(transactionHistoryStart());
    return axios
      .get(`/accounts/${accountNumber}/transactions`, { headers: { Authorization: `Bearer ${token}` } })
      .then((result) => {
        dispatch(transactionHistorySuccess(result.data.data));
      })
  };
};

export default { transactionHistorySuccess, transactionHistoryStart, transactionHistoryFetch };