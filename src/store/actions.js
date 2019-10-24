import * as ACTIONS_TYPES from './action-types';

export const addTransaction = transactions => ({
  type: ACTIONS_TYPES.ADD_TRANSACTION,
  transactions
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
