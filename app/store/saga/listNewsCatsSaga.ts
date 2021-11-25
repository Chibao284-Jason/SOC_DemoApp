import { put, takeLatest } from 'redux-saga/effects';
import * as types from '@store/actions/types';
import { getCatsListNewsFailureActions, getCatsListNewsSuccessActions, getMoreCatsListNewsSuccessActions } from '@store/actions/listNewsCatsActions';
import { getListNewsCatsApi } from '@store/api/listNewsCatsApi';
import { IListNewsCatsActionsRequest } from '@models/actions/listNews';

export function* listNewsCatsSaga(action: IListNewsCatsActionsRequest) {
  try {
    const { data } = yield getListNewsCatsApi(action.params);

    if (data.success === 1) {
      if (parseInt(action.params.page) > 1) {
        yield put(getMoreCatsListNewsSuccessActions())
      }
      yield put(getCatsListNewsSuccessActions(data.data))
    } else {
      yield put(getCatsListNewsFailureActions(data))
    }
  } catch (error) {
    yield put(getCatsListNewsFailureActions(error))
  }
}

export function* watchListNewsCats() {
  yield takeLatest(types.GET_CATS_LIST_NEWS_REQUEST, listNewsCatsSaga);
}