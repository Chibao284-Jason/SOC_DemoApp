import { put, takeLatest } from 'redux-saga/effects';
import * as types from '@store/actions/types';
import { searchRequest, searchSuccess, searchFailure } from '@store/actions/searchNewsAction';
import { searchNewsCatsApi } from '@store/api/searchNewsCatsApi';
import { ISearchNewsActionsRequest } from '@models/actions/listNews';
export function* searchNewsSaga(action: ISearchNewsActionsRequest) {
  try {
    const { data } = yield searchNewsCatsApi(action.params);
    if (data.success === 1) {
      yield put(searchSuccess(data.data))
    } else {
      yield put(searchFailure(data))
    }
  } catch (error) {
    yield put(searchFailure(error))
  }
}



export function* watchSearchNews() {
  yield takeLatest(types.SEARCH_REQUEST, searchNewsSaga);
}