import axios from 'axios';
import * as actionTypes from '../../store/actions/actionTypes';
import { toast } from 'react-toastify';

const createAccountStart = () => {
  return {
    type: actionTypes.CREATE_ACCOUNT_START
  };
};

const createAccountSuccess = (accountDetails) => {
  return {
    type: actionTypes.CREATE_ACCOUNT_SUCCESS,
    accountDetails
  };
};

const createAccountFail = (error) => {
  return {
    type: actionTypes.CREDIT_DEBIT_FAIL,
    error
  };
};

const createAccount = (accountType, token) => {
  const type = { type: accountType.accountType };
  return (dispatch) => {
    dispatch(createAccountStart());
    return axios
      .post('https://banktoday.herokuapp.com/api/v1/accounts/', type, {
        headers: { authorization: `Bearer ${token}` }
      })
      .then((response) => {
        dispatch(createAccountSuccess(response.data.data));
      })
      .catch((error) => {
        toast.error('Please select an appropriate account');
        dispatch(createAccountFail(error.response.data.error));
      });
  };
};

export default {
  createAccount,
  createAccountStart,
  createAccountSuccess,
  createAccountFail
};
