import axios from '../../../axios-auth';
import * as actionTypes from '../../../store/actions/actionTypes';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

const authSuccess = (authData) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    authData
  };
};

const authFail = (error) => ({
  type: actionTypes.AUTH_FAIL,
  error
});

const auth = (loginDetails) => {
  return (dispatch) => {
    dispatch(authStart());
    axios
      .post('auth/signin', loginDetails)
      .then((response) => {
        console.log(32, response.data.data);
        localStorage.setItem('token', response.data.data.token);
        dispatch(authSuccess(response.data.data));
      })
      .catch((error) => {
        console.log(121, error.response.data.error);
        dispatch(authFail(error.response.data.error));
      });
  };
};

// const authCheckState = () => {
//   return dispatch => {
//       const token = localStorage.getItem('token');
//       if (!token) {
//           dispatch(logout());
//       } else {
//           const expirationDate = new Date(localStorage.getItem('expirationDate'));
//           if (expirationDate <= new Date()) {
//               dispatch(logout());
//           } else {
//               const userId = localStorage.getItem('userId');
//               dispatch(authSuccess(token, userId));
//               dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));
//           }   
//       }
//   };
// };
export default {
  authStart,
  authSuccess,
  authFail,
  auth,
  // authCheckState
};
