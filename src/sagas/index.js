import * as ACTIONS_TYPES from '../store/action-types';
import { takeEvery, call } from 'redux-saga/effects';

function* getTransactions() {
  const url = '/senders';
  const data = yield call(fetch, url);
  const transactions = yield data.json();
}

function* getTransactionsSaga() {
  yield takeEvery(ACTIONS_TYPES.GET_TRANSACTIONS, getTransactions);
}

export default getTransactionsSaga;
