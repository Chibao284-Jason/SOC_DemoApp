import { all } from 'redux-saga/effects';

import { watchListNews } from './listNewsSaga';
export default function* rootSaga() {
  yield all([
    watchListNews()
  ]);
}