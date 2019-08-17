import axios from '../../../axios-auth';
import jwtDecode from 'jwt-decode';

import * as actionTypes from '../../../store/actions/actionTypes';

const userAccount = (userAccount) => {
  return {
    type: actionTypes.USER_ACCOUNT_SUCCESS,
    userAccount
  };
};

const userAccountFetchStarted = () => ({
  type: actionTypes.USER_ACCOUNT_FETCH_STARTED
});

const userAccountFetchFailed = () => ({
  type: actionTypes.USER_ACCOUNT_FETCH_FAIL
});

const fetchUserAccount = () => {
  const token = localStorage.getItem('token');
  if (!token) {
    return (dispatch) => {
      dispatch(userAccountFetchFailed());
    };
  }
  let userId;
  const decodedToken = jwtDecode(token);
  new Date().getTime() / 1000;
  userId = decodedToken.user.id;
  return (dispatch) => {
    dispatch(userAccountFetchStarted());
    return axios
      .get(`/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((result) => {
        dispatch(userAccount(result.data.data));
      })
      .catch((error) => {
        dispatch(userAccountFetchFailed(error.response));
      });
  };
};

export default {
  userAccount,
  fetchUserAccount,
  userAccountFetchStarted,
  userAccountFetchFailed
};
