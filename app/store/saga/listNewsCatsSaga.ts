import { put, takeLatest } from 'redux-saga/effects';
import * as types from '@store/actions/types';
import { getListNewsCatsApi } from '@store/api/listNewsCatsApi';
import { IListNewsCatsActionsRequest } from '@models/actions/listNews';
import { Actions } from '@store/actions';

export function* listNewsCatsSaga(action: IListNewsCatsActionsRequest) {
  try {
    const { data } = yield getListNewsCatsApi(action.params);

    if (data.success === 1) {

      yield put(Actions.getCatsListNewsSuccessActions(data.data))
    } else {
      yield put(Actions.getCatsListNewsFailureActions(data))
    }
  } catch (error) {
    yield put(Actions.getCatsListNewsFailureActions(error))
  }
}
export function* listNewsMoreCatsSaga(action: IListNewsCatsActionsRequest) {
  try {
    const { data } = yield getListNewsCatsApi(action.params);

    if (data.success === 1) {
      yield put(Actions.getMoreCatsListNewsSuccessActions(data.data))
    } else {
      yield put(Actions.getMoreCatsListNewsFailureActions(data))
    }
  } catch (error) {
    yield put(Actions.getMoreCatsListNewsFailureActions(error))
  }
}

export function* watchListNewsCats() {
  yield takeLatest(types.GET_CATS_LIST_NEWS_REQUEST, listNewsCatsSaga);
  yield takeLatest(types.GET_MORE_CATS_LIST_NEWS_REQUEST, listNewsMoreCatsSaga);
}