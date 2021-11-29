import { all } from 'redux-saga/effects';
import { watchListNews } from './listNewsSaga';
import { watchListTabSaga } from './listTabSaga';
import { watchListNewsCats } from './listNewsCatsSaga';
import { watchSearchNews } from './searchNewsSaga';
import { watchGetNews } from './getDetailNewsSaga';
export default function* rootSaga() {
  yield all([
    watchListNews(),
    watchListTabSaga(),
    watchListNewsCats(),
    watchSearchNews(),
    watchGetNews()
  ]);
}