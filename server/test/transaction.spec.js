/* eslint-env mocha */
import chai from 'chai';
import chaiHttp from 'chai-http';
import TransactionService from '../services/transaction.service';
import app from '../index';

const { expect } = chai;
const minBalance = 1000;
let staffToken = '';
let clientToken = '';
let newAccountNumber;


chai.use(chaiHttp);


describe('Transaction Resource', () => {
  before((done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'Mercy',
        lastName: 'Fayemi',
        email: 'mercy@gmil.com',
        password: 'Bankappclient2@',
        confirm_password: 'Bankappclient2@',
        type: 'staff',
      })
      .end((err, res) => {
        staffToken = `Bearer ${res.body.data.token}`;
        expect(res).to.have.status(201);
        expect(res.body.status).to.be.equal(201);
        expect(res.body.data).to.have.key('id', 'token', 'email', 'firstName', 'lastName', 'type');
        expect(res.body.data.email).to.be.equal('mercy@gmil.com');
        expect(res.body.data.firstName).to.be.equal('Mercy');
        expect(res.body.data.lastName).to.be.equal('Fayemi');
        expect(res.body.data.type).to.be.equal('staff');
        done();
      });
  });
  before((done) => {
    chai
      .request(app)
      .post('/api/v1/auth/signup')
      .send({
        firstName: 'Tope',
        lastName: 'Fayemi',
        email: 'tope@gmil.com',
        password: 'Bankappclient2@',
        confirm_password: 'Bankappclient2@',
        type: 'client',
      })
      .end((err, res) => {
        clientToken = `Bearer ${res.body.data.token}`;
        expect(res).to.have.status(201);
        expect(res.body.status).to.be.equal(201);
        expect(res.body.data).to.have.key('id', 'token', 'email', 'firstName', 'lastName', 'type');
        expect(res.body.data.email).to.be.equal('tope@gmil.com');
        expect(res.body.data.firstName).to.be.equal('Tope');
        expect(res.body.data.lastName).to.be.equal('Fayemi');
        expect(res.body.data.type).to.be.equal('client');
        done();
      });
  });
  before((done) => {
    chai
      .request(app)
      .post('/api/v1/accounts')
      .send({
        type: 'savings',
        status: 'active',
      })
      .set('Authorization', clientToken)
      .end((err, res) => {
        const { accountNumber } = res.body.data;
        newAccountNumber = accountNumber;
        expect(res).to.have.status(201);
        expect(res.body.status).to.be.equal(201);
        expect(res.body.data).to.have.key('accountNumber', 'email', 'firstName', 'lastName', 'type', 'openingBalance', 'status');
        expect(res.body.data.email).to.be.equal('tope@gmil.com');
        expect(res.body.data.firstName).to.be.equal('Tope');
        expect(res.body.data.lastName).to.be.equal('Fayemi');
        expect(res.body.data.type).to.be.equal('savings');
        done();
      });
  });
  it('should return Auth token is not supplied if header is not set', (done) => {
    chai
      .request(app)
      .post('/api/v1/transactions/2000000000/debit')
      .send({
        amount: 30000000000,
      })
      .end((err, res) => {
        expect(res).to.have.status(403);
        expect(res.body.status).to.be.equal(403);
        expect(res.body.error).to.be.equal('Auth token is not supplied');
        done();
      });
  });
  it('should return You do not have the authorization or right to perform this action if client try to debit an account', (done) => {
    chai
      .request(app)
      .post('/api/v1/transactions/2000000000/debit')
      .send({
        amount: 30000000000,
      })
      .set('Authorization', clientToken)
      .end((err, res) => {
        expect(res).to.have.status(401);
        expect(res.body.status).to.be.equal(401);
        expect(res.body.error).to.be.equal('You do not have the authorization or right to perform this action');
        done();
      });
  });
  it('should credit a user account', (done) => {
    chai
      .request(app)
      .post(`/api/v1/transactions/${newAccountNumber}/credit`)
      .send({
        amount: 3000,
      })
      .set('Authorization', staffToken)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.status).to.be.equal(201);
        expect(res.body.data).to.have.key('transactionId', 'accountNumber', 'amount', 'cashier', 'transactionType', 'accountBalance');
        expect(res.body.data.accountNumber).to.be.equal(newAccountNumber);
        expect(res.body.data.accountBalance).to.be.equal('5000');
        expect(res.body.data.amount).to.be.equal('3000.00');
        expect(res.body.data.cashier).to.be.equal(6);
        expect(res.body.data.transactionType).to.be.equal('credit');
        expect(res.body.data.transactionId).to.be.equal(5);
        done();
      });
  });
  it('should return No account found/Incorrect account number on credit transaction for incorrect account number', (done) => {
    chai
      .request(app)
      .post('/api/v1/transactions/200001234/credit')
      .send({
        amount: 300000,
      })
      .set('Authorization', staffToken)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.status).to.be.equal(400);
        expect(res.body.error).to.be.equal('No account found/Incorrect account number');
        done();
      });
  });
  it('should debit a user bank account', (done) => {
    chai
      .request(app)
      .post(`/api/v1/transactions/${newAccountNumber}/debit`)
      .send({
        amount: 3000,
      })
      .set('Authorization', staffToken)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.status).to.be.equal(201);
        expect(res.body.data).to.have.key('transactionId', 'accountNumber', 'amount', 'cashier', 'transactionType', 'accountBalance');
        expect(res.body.data.accountNumber).to.be.equal(2000000004);
        expect(res.body.data.accountBalance).to.be.equal('2000');
        expect(res.body.data.amount).to.be.equal('3000.00');
        expect(res.body.data.cashier).to.be.equal(6);
        expect(res.body.data.transactionType).to.be.equal('debit');
        expect(res.body.data.transactionId).to.be.equal(6);
        done();
      });
  });
  it('should return Insufficient Balance.', (done) => {
    chai
      .request(app)
      .post(`/api/v1/transactions/${newAccountNumber}/debit`)
      .send({
        amount: 30000000000,
      })
      .set('Authorization', staffToken)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.status).to.be.equal(400);
        expect(res.body.error).to.be.equal('Insufficient Balance.');
        done();
      });
  });
  it('should return No account found/Incorrect account number on debit transaction for incorrect account number', (done) => {
    chai
      .request(app)
      .post('/api/v1/transactions/20000133/debit')
      .send({
        amount: 30000000000,
      })
      .set('Authorization', staffToken)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.status).to.be.equal(400);
        expect(res.body.error).to.be.equal('No account found/Incorrect account number');
        done();
      });
  });
  it(`should return You can not have less than ${minBalance} in your account.`, (done) => {
    chai
      .request(app)
      .post(`/api/v1/transactions/${newAccountNumber}/debit`)
      .send({
        amount: 1800,
      })
      .set('Authorization', staffToken)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.status).to.be.equal(400);
        expect(res.body.error).to.be.equal(`You can not have less than ${minBalance} in your account.`);
        done();
      });
  });
  it('should return Account is dormant. Please reactivate. while doing credit transaction', (done) => {
    chai
      .request(app)
      .post('/api/v1/transactions/2000000000/credit')
      .send({
        amount: 300000,
      })
      .set('Authorization', staffToken)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.status).to.be.equal(400);
        expect(res.body.error).to.be.equal('Account is dormant. Please reactivate.');
        done();
      });
  });
  it('should return Account is dormant. Please reactivate. while debitting an account', (done) => {
    chai
      .request(app)
      .post('/api/v1/transactions/2000000000/debit')
      .send({
        amount: 3000,
      })
      .set('Authorization', staffToken)
      .end((err, res) => {
        expect(res).to.have.status(400);
        expect(res.body.status).to.be.equal(400);
        expect(res.body.error).to.be.equal('Account is dormant. Please reactivate.');
        done();
      });
  });
  it('should return a specific transaction', (done) => {
    chai
      .request(app)
      .get('/api/v1/transactions/2')
      .send({
        amount: 3000,
      })
      .set('Authorization', staffToken)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body.status).to.be.equal(201);
        expect(res.body.data).to.have.key('id', 'account_number', 'amount', 'cashier', 'type', 'old_balance', 'new_balance', 'created_on');
        expect(res.body.data.account_number).to.be.equal(2000000000);
        expect(res.body.data.new_balance).to.be.equal('4000.00');
        expect(res.body.data.old_balance).to.be.equal('7000.00');
        expect(res.body.data.amount).to.be.equal('3000.00');
        expect(res.body.data.cashier).to.be.equal(2);
        expect(res.body.data.type).to.be.equal('debit');
        expect(res.body.data.id).to.be.equal(2);
        done();
      });
  });
  it('transactionAction()should return a debit transaction', async () => {
    const transaction = await TransactionService.transactionAction('debit', 2, 2000000015, 3000, 7000);
    expect(transaction).to.have.key('transactionId', 'accountNumber', 'amount', 'cashier', 'transactionType', 'accountBalance');
    expect(transaction.accountNumber).to.be.equal(2000000015);
    expect(transaction.accountBalance).to.be.equal('4000');
    expect(transaction.amount).to.be.equal('3000.00');
    expect(transaction.cashier).to.be.equal(2);
    expect(transaction.transactionType).to.be.equal('debit');
    expect(transaction.transactionId).to.be.equal(7);
  });
  it('transactionAction()should return a credit transaction', async () => {
    const transaction = await TransactionService.transactionAction('debit', 2, 2000000015, 3000, 7000);
    expect(transaction).to.have.key('transactionId', 'accountNumber', 'amount', 'cashier', 'transactionType', 'accountBalance');
    expect(transaction).to.have.key('transactionId', 'accountNumber', 'amount', 'cashier', 'transactionType', 'accountBalance');
    expect(transaction.accountNumber).to.be.equal(2000000015);
    expect(transaction.accountBalance).to.be.equal('4000');
    expect(transaction.amount).to.be.equal('3000.00');
    expect(transaction.cashier).to.be.equal(2);
    expect(transaction.transactionType).to.be.equal('debit');
    expect(transaction.transactionId).to.be.equal(8);
  });
  it('transactionAction()should return a credit transaction', async () => {
    const transaction = await TransactionService.transactionAction('debit', 2, 2000000005, 6500, 7000);
    expect(transaction.err).to.be.equal(`You can not have less than ${minBalance} in your account.`);
  });
  it('transactionAction()should return error for a single transaction', async () => {
    const transactionId = 'two';
    const singleTransaction = await TransactionService.getTransaction(transactionId);
    expect(singleTransaction.err).to.be.equal('invalid transaction detail provided');
  });
  it('creditAccount(userAccountNumber, tranAmount, cashier) return error for a credit transaction', async () => {
    const cashier = 'two';
    const tranAmount = 2000;
    const userAccountNumber = 2000000000;
    const singleTransaction = await TransactionService.creditAccount(userAccountNumber, tranAmount, cashier);
    expect(singleTransaction.err).to.be.equal('Account is dormant. Please reactivate.');
  });
});
