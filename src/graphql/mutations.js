/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createIncome = /* GraphQL */ `
  mutation CreateIncome(
    $input: CreateIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    createIncome(input: $input, condition: $condition) {
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
export const updateIncome = /* GraphQL */ `
  mutation UpdateIncome(
    $input: UpdateIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    updateIncome(input: $input, condition: $condition) {
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
export const deleteIncome = /* GraphQL */ `
  mutation DeleteIncome(
    $input: DeleteIncomeInput!
    $condition: ModelIncomeConditionInput
  ) {
    deleteIncome(input: $input, condition: $condition) {
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
export const createExpense = /* GraphQL */ `
  mutation CreateExpense(
    $input: CreateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    createExpense(input: $input, condition: $condition) {
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
export const updateExpense = /* GraphQL */ `
  mutation UpdateExpense(
    $input: UpdateExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    updateExpense(input: $input, condition: $condition) {
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
export const deleteExpense = /* GraphQL */ `
  mutation DeleteExpense(
    $input: DeleteExpenseInput!
    $condition: ModelExpenseConditionInput
  ) {
    deleteExpense(input: $input, condition: $condition) {
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
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
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
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
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
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
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
