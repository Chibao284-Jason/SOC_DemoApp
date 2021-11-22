import { all } from 'redux-saga/effects';

import { watchListNews } from './listNewsSaga';
import { watchListTabSaga } from './listTabSaga';
export default function* rootSaga() {
  yield all([
    watchListNews(),
    watchListTabSaga()
  ]);
}