import axios from '../../../axios-auth';
import jwtDecode from 'jwt-decode';

import jwt from 'jsonwebtoken';
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

const fetchUserAccount = () => {
  const token = localStorage.getItem('token');
  let userId;
  jwt.verify(token, 'damilola_adekoya_secret', (err, decoded) => {
    if (err) {
      console.log(333, err);
    }
    // var current_time = new Date().getTime() / 1000;
	  // if (current_time > decoded.exp) { console.log(1232, 'I am here') } else {
    //   console.log(121992, 'dami')
    // }
    userId = decoded.user.id;
  });
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
