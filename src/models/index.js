// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Categorytype = {
  "PAGIA": "PAGIA",
  "DIASKEDASI": "DIASKEDASI",
  "YPOXREWSI": "YPOXREWSI"
};

const { Income, Expense, Category } = initSchema(schema);

export {
  Income,
  Expense,
  Category,
  Categorytype
};