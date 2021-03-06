[![Build Status](https://travis-ci.org/dharmykoya/banka_react.svg?branch=bg-test-fix-167825639)](https://travis-ci.org/dharmykoya/banka_react) [![Coverage Status](https://coveralls.io/repos/github/dharmykoya/banka_react/badge.svg?branch=bg-test-fix-167825639)](https://coveralls.io/github/dharmykoya/banka_react?branch=bg-test-fix-167825639)

# Banka

Banka is a light-weight core banking application that powers banking operations like account creation, customer deposit and withdrawals. This app is meant to support a single bank, where users can signup and create bank accounts online.

**UI template:** (https://dharmykoya.github.io/banka/UI/index)
**NETLIFY link:** (https://bank-today.netlify.com)

## Project Management Tool

**Pivotal Tracker:** Project is currently being managed with pivotal tracker, at https://www.pivotaltracker.com/n/projects/2357175

## Built With

- [Node.js](https://nodejs.org/en/)
- [React](https://reactjs.org)
- [Express](https://expressjs.com)
- [PostgresSQL](https://postgresql.org)
- Javascript
- Html
- CSS

## Features

- User (client) can sign up.
- User (client) can login.
- User (client) can create an account.
- Staff (cashier) can debit user (client) account.
- Staff (cashier) can credit user (client) account.
- Admin/staff can activate or deactivate an account.
- Admin/staff can view all user accounts.
- Admin/staff can view a specific user account.
- Admin/staff can activate or deactivate an account.
- Admin/staff can delete a specific user account.
- Admin can create staff.

## Installation

1. Ensure you have Node.js and npm installed

2. Clone this repo

```bash
$ git clone https://github.com/dharmykoya/banka.git
```

3. Install Dependencies

```bash
npm install
```

4. Start server

```bash
npm run start-dev
```

## Supporting Packages

#### Linter

- [ESLint](https://eslint.org/) - Linter Tool

#### Compiler

- [Babel](https://eslint.org/) - Compiler for Next Generation JavaScript

#### Test-Driven Development

- [Mocha](https://mochajs.org/)
- [Chai](http://chaijs.com/)
- [Chai-http](https://github.com/visionmedia/supertest)
- [Istanbul(nyc)](https://istanbul.js.org/)

1. Clone this repo

```bash
$ git clone https://github.com/dharmykoya/banka.git
```

2. Install Dependencies

```bash
npm install
```

4. Run Test

```bash
npm test
```

5. Run Coverage Report

```bash
npm run coverage
```

#### Continuous Integration

    * Travis CI & Codeclimate for test automation
    * Coveralls for test coverage report

## API Routes

|                DESCRIPTION                 | HTTP METHOD | ROUTES                                                     |
| :----------------------------------------: | ----------- | ---------------------------------------------------------- |
|                Sign up User                | POST        | /api/v1/auth/signup                                        |
|                Log in User                 | POST        | /api/v1/auth/signin                                        |
|           Create a bank account            | POST        | /api/v1/accounts                                           |
|    Activate or Deactive a bank account     | PATCH       | /api/v1/accounts/account-number                            |
|           Delete a bank account            | DELETE      | /api/v1/accounts/{account-number}                          |
|           Credit a bank account            | POST        | /api/v1/transactions/account-number/credit                 |
|            Debit a bank account            | POST        | /api/v1/transactions/account-number/debit                  |
|      View account transaction history      | GET         | /api/v1/transactions/accounts/{account-number}/transaction |
|        View a specific transaction         | GET         | /api/v1/transactions/{transaction-id}                      |
| View all accounts owned by a specific user | GET         | /api/v1/user/{user-email}/accounts                         |
|      View specific account's details       | GET         | /api/v1/accounts/{account-number}                          |
|      View a list of all bank accounts      | GET         | /api/v1/accounts/                                          |
|  View a list of all active bank accounts   | GET         | /api/v1/accounts?status=active                             |
|  View a list of all dormant bank accounts  | GET         | /api/v1/accounts?status=dormant                            |

## References

- ALC tutorial by Bolaji Olajide - https://www.youtube.com/watch?v=WLIqvJzD9DE
- StackOverflow
- https://stackoverflow.com/questions/19876764/how-to-create-a-enum-field-with-default-value
- https://www.postgresql.org/docs/9.1/datatype-enum.html

## License

&copy; Damilola Adekoya
