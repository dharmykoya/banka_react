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

const fetchUserAccount = (userId) => {
  const token = localStorage.getItem('token');
  return (dispatch) => {
    dispatch(userAccountFetchStarted());
    return axios
      .get(`/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
      .then((result) => {
        dispatch(userAccount(result.data.data));
      })
      .catch((error) => {
        console.log(121, error.response);
      });
  };
};

export default { userAccount, fetchUserAccount, userAccountFetchStarted };
