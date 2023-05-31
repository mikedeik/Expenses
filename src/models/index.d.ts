import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum Categorytype {
  PAGIA = "PAGIA",
  DIASKEDASI = "DIASKEDASI",
  YPOXREWSI = "YPOXREWSI"
}



type EagerIncome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Income, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Value: number;
  readonly Cash?: boolean | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyIncome = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Income, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Value: number;
  readonly Cash?: boolean | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Income = LazyLoading extends LazyLoadingDisabled ? EagerIncome : LazyIncome

export declare const Income: (new (init: ModelInit<Income>) => Income) & {
  copyOf(source: Income, mutator: (draft: MutableModel<Income>) => MutableModel<Income> | void): Income;
}

type EagerExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expense, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryID: string;
  readonly category?: Category | null;
  readonly Description?: string | null;
  readonly Date: string;
  readonly Value: number;
  readonly Testing?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expense, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly categoryID: string;
  readonly category: AsyncItem<Category | undefined>;
  readonly Description?: string | null;
  readonly Date: string;
  readonly Value: number;
  readonly Testing?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Expense = LazyLoading extends LazyLoadingDisabled ? EagerExpense : LazyExpense

export declare const Expense: (new (init: ModelInit<Expense>) => Expense) & {
  copyOf(source: Expense, mutator: (draft: MutableModel<Expense>) => MutableModel<Expense> | void): Expense;
}

type EagerCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly Expenses?: (Expense | null)[] | null;
  readonly type?: Categorytype | keyof typeof Categorytype | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Category, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly Expenses: AsyncCollection<Expense>;
  readonly type?: Categorytype | keyof typeof Categorytype | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category) & {
  copyOf(source: Category, mutator: (draft: MutableModel<Category>) => MutableModel<Category> | void): Category;
}