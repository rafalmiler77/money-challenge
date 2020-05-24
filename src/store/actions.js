import * as ACTIONS_TYPES from './action-types';

export const addTransaction = transaction => ({
  type: ACTIONS_TYPES.ADD_TRANSACTION_REQUEST,
  transaction
})

export const addTransactionSuccess = transaction => ({
  type: ACTIONS_TYPES.ADD_TRANSACTION_SUCCESS,
  transaction
})

export const addTransactionFailed = () => ({
  type: ACTIONS_TYPES.ADD_TRANSACTION_FAILED
})

export const getTransactions = () => ({
  type: ACTIONS_TYPES.GET_TRANSACTIONS_REQUEST
})

export const getTransactionsSuccess = transactions => ({
  type: ACTIONS_TYPES.GET_TRANSACTIONS_SUCCESS,
  transactions
})
export const getTransactionsFailed = () => ({
  type: ACTIONS_TYPES.GET_TRANSACTIONS_FAILED
})
