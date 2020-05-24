import * as ACTIONS_TYPES from './action-types';

const INITIAL_AMOUNT = 20000;

const initialState = {
  initialAccountValue: INITIAL_AMOUNT,
  currentAccountValue: INITIAL_AMOUNT,
  transactions: []
}

export default (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS_TYPES.ADD_TRANSACTION_SUCCESS: {
    return ({
      ...state,
      currentAccountValue: state.currentAccountValue - action.transaction.amount,
      transactions: state.transactions.concat(action.transaction)
    });
  }
  case ACTIONS_TYPES.GET_TRANSACTIONS_SUCCESS: {
    const transactions = action.transactions.data;
    const transactedMoney = transactions.reduce((acc, curr) => {
      return acc + curr.amount;
    }, 0);
    return ({
      ...state,
      currentAccountValue: state.currentAccountValue - transactedMoney,
      transactions: state.transactions.concat(transactions)
    });
  }
  default:
    return state;
  }
}