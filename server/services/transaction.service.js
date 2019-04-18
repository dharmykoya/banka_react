/* eslint-disable max-len */
import AccountService from './account.service';
import Model from '../models/Model';
import TransactionData from '../data/transaction';

/**
 * @class UserService
 * @description handles the request coming from the service controller.
 * @exports TransactionService
 */

class TransactionService {
  /**
   * @description credit a bank account
   * @static
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} API response
   * @memberof TransactionService
   */
  static async creditAccount(userAccountNumber, tranAmount, cashier) {
    let response;
    const parseAmount = parseFloat(tranAmount);
    const parseAccountNumber = parseInt(userAccountNumber, Number);
    try {
      const foundAccount = await AccountService.findAccountByAccountNumber(parseAccountNumber);

      // checks if the account does not exist
      if (foundAccount.error) {
        response = foundAccount.message;
        throw response;
      }
      // checks if the account is dormant
      const dormantAccount = await AccountService.checkDormantAccount(parseAccountNumber);
      if (dormantAccount) {
        response = 'Account is dormant. Please reactivate.';
        throw response;
      }
      const type = 'credit';
      const oldBalance = parseFloat(foundAccount.balance);
      const transaction = await this.transactionAction(type, cashier, parseAccountNumber, parseAmount, oldBalance);

      if (transaction.error) {
        throw transaction;
      }
      // updating the account record after transaction is successfull
      const updateAccountBalance = await AccountService.updateAccountBalance(transaction.accountBalance, parseAccountNumber);
      if (updateAccountBalance.error) {
        response = { dbError: updateAccountBalance.err, message: 'can not update the account balance' };
        throw response;
      }
      response = transaction;
      return response;
    } catch (err) {
      response = { error: true, err };
      return response;
    }
  }

  static debitAccount(accountNumber, amount) {
    const parseAmount = parseFloat(amount);
    const parseAccountNumber = parseInt(accountNumber, Number);
    const foundAccount = AccountService.findAccountByAccountNumber(parseAccountNumber);

    // checks if the account does not exist
    if (foundAccount.error) {
      return foundAccount;
    }

    // checks if the account is dormant
    if (foundAccount.status === 'dormant') {
      const response = { error: true, message: 'Account is dormant. Please reactivate.' };
      return response;
    }

    // checks if the amount to withdraw is greater than the account balance
    if (foundAccount.balance < parseAmount) {
      const response = { error: true, message: 'Insufficient Balance.' };
      return response;
    }

    const transactionLength = TransactionData.transactions.length;
    const lastTransactionId = TransactionData.transactions[transactionLength - 1].id;
    const id = lastTransactionId + 1;
    const type = 'debit';
    const cashier = 1;

    const oldBalance = parseFloat(foundAccount.balance);

    const transaction = this.transactionAction(type, id, cashier, parseAccountNumber, parseAmount, oldBalance);

    // updating the found record
    foundAccount.balance = transaction.accountBalance;

    return transaction;
  }

  /**
   * @description makes the transaction depending on the type
   * @static
   * @param {Object} req
   * @param {Object} res
   * @returns {Object} API response
   * @memberof TransactionService
   */
  static async transactionAction(type, cashier, parseAccountNumber, parseAmount, oldBalance) {
    let newBalance;
    const minBalance = parseFloat(1000);
    // const createdOn = moment().format('DD-MM-YYYY');
    try {
      if (type === 'credit') {
        newBalance = oldBalance + parseAmount;
      } else if (type === 'debit') {
        newBalance = oldBalance - parseAmount;
        // checks if the amount to withdraw is greater than the account balance
        if (newBalance < minBalance) {
          const response = { message: `You can not have less than ${minBalance} in your account.` };
          throw response.message;
        }
      }
      // creating a new Transaction
      const model = new Model('transactions');
      const newTransaction = await model.InsertTransaction(type, parseAccountNumber, cashier, parseAmount, oldBalance, newBalance);

      const response = {
        transactionId: newTransaction.id,
        accountNumber: newTransaction.account_number,
        amount: newTransaction.amount,
        cashier,
        transactionType: type,
        accountBalance: parseFloat(newBalance, 2).toString(),
      };
      return response;
    } catch (err) {
      const response = { error: true, err };
      return response;
    }
  }
}

export default TransactionService;
