/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateIncome = /* GraphQL */ `
  subscription OnCreateIncome($filter: ModelSubscriptionIncomeFilterInput) {
    onCreateIncome(filter: $filter) {
      id
      Value
      Cash
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateIncome = /* GraphQL */ `
  subscription OnUpdateIncome($filter: ModelSubscriptionIncomeFilterInput) {
    onUpdateIncome(filter: $filter) {
      id
      Value
      Cash
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteIncome = /* GraphQL */ `
  subscription OnDeleteIncome($filter: ModelSubscriptionIncomeFilterInput) {
    onDeleteIncome(filter: $filter) {
      id
      Value
      Cash
      Description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateExpense = /* GraphQL */ `
  subscription OnCreateExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onCreateExpense(filter: $filter) {
      id
      categoryID
      category {
        id
        name
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Description
      Date
      Value
      Testing
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateExpense = /* GraphQL */ `
  subscription OnUpdateExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onUpdateExpense(filter: $filter) {
      id
      categoryID
      category {
        id
        name
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Description
      Date
      Value
      Testing
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteExpense = /* GraphQL */ `
  subscription OnDeleteExpense($filter: ModelSubscriptionExpenseFilterInput) {
    onDeleteExpense(filter: $filter) {
      id
      categoryID
      category {
        id
        name
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Description
      Date
      Value
      Testing
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
      id
      name
      Expenses {
        nextToken
        startedAt
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
      id
      name
      Expenses {
        nextToken
        startedAt
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
      id
      name
      Expenses {
        nextToken
        startedAt
      }
      type
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
