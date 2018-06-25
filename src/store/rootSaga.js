import { all } from 'redux-saga/effects';
import { notificationSagas } from 'controllers/notification';
import { fetchSagas } from 'controllers/fetch';

export function* rootSagas() {
  yield all([notificationSagas(), fetchSagas()]);
}
