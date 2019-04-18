import CreateTableMigrations from './createTableMigrations';

const {
  UserSchema,
  AccountSchema,
  TransactionSchema,
  SuperAdmin,
  Staff,
  Client,
  AccountA,
  AccountB,
  TransactionA,
  TransactionB,
  TransactionC,
  TransactionD,
} = CreateTableMigrations;

(async () => {
  try {
    await UserSchema();
    await AccountSchema();
    await TransactionSchema();
    await SuperAdmin();
    await Staff();
    await Client();
    await AccountA();
    await AccountB();
    await TransactionA();
    await TransactionB();
    await TransactionC();
    await TransactionD();
    return true;
  } catch (error) { return error; }
})();
