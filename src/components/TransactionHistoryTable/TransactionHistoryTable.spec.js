import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TransactionHistoryTable from './TransactionHistoryTable';

configure({ adapter: new Adapter() });

describe('<TransactionHistoryTable />', () => {
  const props = {
    accountDetails: {
      account_number: '200057333',
      type: 'savings',
      status: 'active',
      balance: '20000'
    },
    transactionsList: [
      {
        id: 5,
        type: 'credit',
        account_number: 2000000003,
        cashier: 1,
        amount: '2.00',
        old_balance: '2000.00',
        new_balance: '2002.00',
        created_on: '2019-04-28T12:43:02.936Z'
      },
      {
        id: 6,
        type: 'credit',
        account_number: 2000000003,
        cashier: 1,
        amount: '5000.00',
        old_balance: '2002.00',
        new_balance: '7002.00',
        created_on: '2019-04-28T12:43:23.702Z'
      },
      {
        id: 7,
        type: 'credit',
        account_number: 2000000003,
        cashier: 1,
        amount: '5000.00',
        old_balance: '7002.00',
        new_balance: '12002.00',
        created_on: '2019-04-28T12:44:19.608Z'
      },
      {
        id: 8,
        type: 'debit',
        account_number: 2000000003,
        cashier: 1,
        amount: '2000.00',
        old_balance: '12002.00',
        new_balance: '10002.00',
        created_on: '2019-04-28T12:44:58.841Z'
      }
    ]
  };

  it('should render TransactionHistoryTable', () => {
    shallow(<TransactionHistoryTable {...props} />);
  });

  // it('should render a disabled TableRow', () => {
  //   shallow(<TransactionHistoryTable {...props} />);
  // });
});
