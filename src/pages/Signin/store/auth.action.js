// import axios from '../../../axios-auth';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import * as actionTypes from '../../../store/actions/actionTypes';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

const authSuccess = (token, authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token,
    authData
  };
};

const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  error
});

const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

const checkAuthTimeout = (expiresIn) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expiresIn);
  };
};

const auth = (loginDetails) => {
  return (dispatch) => {
    dispatch(authStart());
    return axios
      .post('https://banktoday.herokuapp.com/api/v1/auth/signin', loginDetails)
      .then((response) => {
        const decodedToken = jwtDecode(response.data.data.token);
        const expirationDate = new Date(
          new Date().getTime() + decodedToken.exp / 1000
        );
        localStorage.setItem('token', response.data.data.token);
        localStorage.setItem('expirationDate', expirationDate);
        dispatch(authSuccess(response.data.data.token, response.data.data));
        dispatch(checkAuthTimeout(decodedToken.exp));
      })
      .catch((error) => {
        dispatch(authFail(error.response.data.error));
      });
  };
};

const authCheckState = () => {
  return (dispatch) => {
    console.log(789);
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(authLogout());
    } else {
      const decodedToken = jwtDecode(token);
      var currentTime = new Date().getTime() / 1000;
      // if (currentTime > decodedToken.exp) {
      //   console.log(1232, 'I am here');
      // } else {
      //   console.log(121992, 'dami');
      // }
      const expirationDate = new Date(localStorage.getItem('expirationDate'));
      if (expirationDate <= new Date()) {
        dispatch(authLogout());
      } else {
        dispatch(authSuccess(token, decodedToken.user));
        dispatch(
          checkAuthTimeout(expirationDate.getTime() - new Date().getTime())
        );
      }
    }
  };
};
export default {
  authStart,
  authSuccess,
  authFail,
  auth,
  authLogout,
  authCheckState
};
