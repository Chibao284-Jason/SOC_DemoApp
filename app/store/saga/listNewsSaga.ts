import { put, takeLatest } from 'redux-saga/effects';
import { dataListNews } from "@constants/dataExample";
import * as types from '@store/actions/types';
import { getListNewsSuccessActions, getListNewsFailureActions } from '@store/actions/listNewsActions';
import { getListNewsApi } from '@store/api/listNewsApi';
import { IListNewsActionsRequest } from '@models/actions/listNews';
export function* listNewsSaga(action: IListNewsActionsRequest) {
  try {
    const { data } = yield getListNewsApi(action.params);
    if (data.success === 1) {
      yield put(getListNewsSuccessActions(data.data))
    } else {
      yield put(getListNewsFailureActions(data))
    }
  } catch (error) {
    yield put(getListNewsFailureActions(error))
  }
}



export function* watchListNews() {
  yield takeLatest(types.GET_LIST_NEWS_REQUEST, listNewsSaga);
}