// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Expense, Category } = initSchema(schema);

export {
  Expense,
  Category
};