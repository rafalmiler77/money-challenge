import * as ACTIONS_TYPES from './action-types';

const INITIAL_AMOUNT = 20000;

const initialState = {
  currentAccountValue: INITIAL_AMOUNT,
  transactions: []
}

export default (state = initialState, action) => {
  switch (action.type) {
  case ACTIONS_TYPES.ADD_TRANSACTION: {
    return ({
      ...state,
      currentAccountValue: state.currentAccountValue - action.transactions.amount,
      transactions: state.transactions.concat(action.transactions)
    });
  }
  default:
    return state;
  }
}