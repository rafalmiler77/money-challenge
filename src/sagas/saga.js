import * as ACTIONS_TYPES from '../store/action-types';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../store/actions';

function* getTransactions() {
  try {
    const url = '/api/senders';
    const data = yield call(fetch, url);
    const transactions = yield data.json();
    yield put(actions.getTransactionsSuccess(transactions));
  } catch(error) {
    yield put(actions.getTransactionsFailed());
    console.error(`Couldn't fetch transactions`, error);
  }
}
function* addTransaction(payload) {
  const transaction = payload.transaction;
  try {
    const url = '/api/add';
    const addTransaction = yield call(fetch, url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(transaction)
    })
    const response = yield addTransaction.json();
    yield put(actions.addTransactionSuccess(response.data));
  } catch (error) {
    yield put(actions.addTransactionFailed);
    console.error(`Couldn't add a transaction`, error);
  }
}

function* getTransactionsSaga() {
  yield takeEvery(ACTIONS_TYPES.GET_TRANSACTIONS_REQUEST, getTransactions);
  yield takeEvery(ACTIONS_TYPES.ADD_TRANSACTION_REQUEST, addTransaction);
}

export default getTransactionsSaga;
