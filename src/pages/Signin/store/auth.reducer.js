import * as actionTypes from '../../../store/actions/actionTypes';
import { updateObject } from '../../../helpers/helper';

const initialState = {
  token: null,
  userId: null,
  userType: null,
  isAdmin: null,
  error: null,
  loading: false,
  logoutState: false
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
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
    loading: false
  });
};

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

    default:
      return state;
  }
};

export default reducer;
