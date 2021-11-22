import { put, takeLatest } from 'redux-saga/effects';
// import { IProductResponseState } from '@models/actions/product';
import { dataListNews } from "@constants/dataExample";
import * as types from '@store/actions/types';
import { getListNewsRequestActions, getListNewsSuccessActions, getListNewsFailureActions } from '@store/actions/listNewsActions';
export function* listNewsSaga(action: any) {
  try {
    const response = { success: true, data: dataListNews, errorMessage: 'get fail' };
    if (response.success) {
      yield put(getListNewsSuccessActions(response.data))
    } else {
      yield put(getListNewsFailureActions(response.errorMessage))
    }
  } catch (error) {
    yield put(getListNewsFailureActions(error))
  }
}

export function* watchListNews() {
  yield takeLatest(types.GET_LIST_NEWS_REQUEST, listNewsSaga);
}