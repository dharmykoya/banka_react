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

// const userAccount = (userAccount) => {
//   return {
//     type: actionTypes.USER_ACCOUNT_SUCCESS,
//     userAccount
//   };
// };

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
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(authLogout());
    } else {
      const decodedToken = jwtDecode(token);
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

const register = (userDetails) => {
  return (dispatch) => {
    dispatch(authStart());
    return axios
      .post('https://banktoday.herokuapp.com/api/v1/auth/signup', userDetails)
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

// const fetchUserAccount = () => {
//   const token = localStorage.getItem('token');
//   if (!token) {
//     return (dispatch) => {
//       dispatch(authLogout());
//     };
//   }
//   let userId;
//   const decodedToken = jwtDecode(token);
//   new Date().getTime() / 1000;
//   userId = decodedToken.user.id;
//   return (dispatch) => {
//     return axios
//       .get(`/user/${userId}`, { headers: { Authorization: `Bearer ${token}` } })
//       .then((result) => {
//         dispatch(userAccount(result.data.data));
//       })
//       .catch((error) => {
//         dispatch(authFail(error.response));
//       });
//   };
// };
export default {
  authStart,
  authSuccess,
  authFail,
  auth,
  authLogout,
  authCheckState,
  register
};
