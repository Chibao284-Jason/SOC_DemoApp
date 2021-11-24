import { all } from 'redux-saga/effects';

import { watchListNews } from './listNewsSaga';
import { watchListTabSaga } from './listTabSaga';
import { watchListNewsCats } from './listNewsCatsSaga';
export default function* rootSaga() {
  yield all([
    watchListNews(),
    watchListTabSaga(),
    watchListNewsCats(),
  ]);
}