import { put, takeLatest } from 'redux-saga/effects';
import * as types from '@store/actions/types';
import { getListNewsSuccessActions, getListNewsFailureActions } from '@store/actions/listNewsActions';
import { getDetailNewsApi } from '@store/api/getDetailNewsApi';
import { IListNewsActionsRequest } from '@models/actions/listNews';
import { IDetailNewsActionsRequest } from '@models/actions/getDetailNews';
import { getDetailNewsFailureActions, getDetailNewsSuccessActions } from '@store/actions/getDetailNewsActions';
export function* getDetailNewsSaga(action: IDetailNewsActionsRequest) {
  try {
    const { data } = yield getDetailNewsApi(action.params);
    if (data.success === 1) {
      yield put(getDetailNewsSuccessActions(data.data))
    } else {
      yield put(getDetailNewsFailureActions(data))
    }
  } catch (error) {
    yield put(getDetailNewsFailureActions(error))
  }
}



export function* watchGetNews() {
  yield takeLatest(types.GET_DETAIL_NEWS_REQUEST, getDetailNewsSaga);
}