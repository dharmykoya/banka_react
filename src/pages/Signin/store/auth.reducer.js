import * as actionTypes from '../../../store/actions/actionTypes';
import { updateObject } from '../../../helpers/helper';

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: false
};

const authStart = (state, action) => {
  return updateObject(state, {
    error: action.error,
    loading: true
  });
};

const authSuccess = (state, action) => {
  return updateObject(state, {
    token: action.authData.token,
    userId: action.authData.id,
    error: null,
    loading: false
  });
};

const authFail = (state, action) => {
  return updateObject(state, { error: action.error, loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);

    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);

    case actionTypes.AUTH_FAIL:
      return authFail(state, action);

    default:
      return state;
  }
};

export default reducer;
