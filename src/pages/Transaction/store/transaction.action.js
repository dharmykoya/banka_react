import axios from 'axios';
import * as actionTypes from '../../../store/actions/actionTypes';
import { toast } from 'react-toastify';

const creditDebitStart = () => {
  return {
    type: actionTypes.CREDIT_DEBIT_START
  };
};

const getAccountSuccess = (accountDetails) => {
  return {
    type: actionTypes.GET_CRREDIT_DEBIT_ACCOUNT_DETAILS,
    accountDetails
  };
};

const creditDebitSuccess = (transactionDetails) => {
  return {
    type: actionTypes.CREDIT_DEBIT_SUCCESS,
    transactionDetails
  };
};

const creditDebitFail = (error) => {
  return {
    type: actionTypes.CREDIT_DEBIT_FAIL,
    error
  };
};

const getAccountDetail = (accountNumber, token) => {
  return (dispatch) => {
    dispatch(creditDebitStart());
    return axios
      .get(`https://banktoday.herokuapp.com/api/v1/accounts/${accountNumber}`, {
        headers: { authorization: `Bearer ${token}` }
      })
      .then((response) => {
        dispatch(getAccountSuccess(response.data.data));
      })
      .catch((error) => {
        toast.error(error.response.data.error);
        dispatch(creditDebitFail(error.response.data.error));
      });
  };
};

const makeTransaction = (accountNumber, transactionType, amount, token) => {
  return (dispatch) => {
    dispatch(creditDebitStart());
    return axios
      .post(
        `https://banktoday.herokuapp.com/api/v1/transactions/${accountNumber}/${transactionType}`,
        amount,
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        toast.success('transaction successfull');
        dispatch(creditDebitSuccess(response.data.data));
      })
      .catch((error) => {
        toast.error(error.response.data.error);
        dispatch(creditDebitFail(error.response.data.error));
      });
  };
};

export default {
  getAccountDetail,
  creditDebitStart,
  creditDebitSuccess,
  creditDebitFail,
  makeTransaction
};
