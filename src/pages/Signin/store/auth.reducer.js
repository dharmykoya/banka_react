import * as actionTypes from '../../../store/actions/actionTypes';
import { updateObject } from '../../../helpers/helper';

const initialState = {
  token: null,
  userId: null,
  userType: null,
  isAdmin: null,
  error: null,
  loading: false,
  logoutState: false,
  userDetails: null,
  userAccount: null
};

const authStart = (state) => {
  return updateObject(state, {
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.token,
    userId: action.authData.id,
    userType: action.authData.type,
    isAdmin: action.authData.isAdmin,
    error: null,
    loading: false,
    userDetails: action.authData
  });
};
// const userAccount = (state, action) => {
//   return updateObject(state, {
//     userAccount: action.userAccount
//   });
// };

const authFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const authLogout = (state) => {
  return updateObject(state, { token: null, logoutState: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);

    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);

    case actionTypes.AUTH_FAIL:
      return authFail(state, action);

    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);

    // case actionTypes.USER_ACCOUNT_SUCCESS:
    //   return userAccount(state, action);

    default:
      return state;
  }
};

export default reducer;
