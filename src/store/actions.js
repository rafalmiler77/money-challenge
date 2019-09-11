import * as ACTIONS_TYPES from './action-types';

export const addTransaction = transactions => ({
  type: ACTIONS_TYPES.ADD_TRANSACTION,
  transactions
})