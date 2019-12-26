import * as ACTIONS_TYPES from '../store/action-types';
import { takeEvery, call, put } from 'redux-saga/effects';
import * as actions from '../store/actions';

function* getTransactions() {
  try {
    const url = '/senders';
    const data = yield call(fetch, url);
    const transactions = yield data.json();
    yield put(actions.getTransactionsSuccess(transactions));
  } catch(error) {
    yield put(actions.getTransactionsFailed());
    console.error(`Couldn't fetch transactions`, error);
  }
}

function* getTransactionsSaga() {
  yield takeEvery(ACTIONS_TYPES.GET_TRANSACTIONS_REQUEST, getTransactions);
}

export default getTransactionsSaga;
