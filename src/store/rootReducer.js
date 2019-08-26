import { combineReducers } from 'redux';
import authReducer from '../pages/Signin/store/auth.reducer';
import dashboardReducer from '../pages/Dashboard/store/dashboard.reducer';
import transactionHistoryReducer from '../pages/TransactionHistory/store/transactionHistory.reducer';
import creditDebitReducer from '../pages/Transaction/store/transaction.reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  account: dashboardReducer,
  transactionHistory: transactionHistoryReducer,
  transactions: creditDebitReducer
});

export default rootReducer;
