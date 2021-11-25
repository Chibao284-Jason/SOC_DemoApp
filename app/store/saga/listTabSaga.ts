import { put, takeLatest } from 'redux-saga/effects';
// import { IProductResponseState } from '@models/actions/product';
import { dataListNews } from "@constants/dataExample";
import * as types from '@store/actions/types';
import { getListTabSuccess, getListTabFailure } from '@store/actions/listTabBarActions';
import { getListTabApi } from '@store/api/listTabApi';
export interface IDataTab {
  success: number
  message: string
  data: any
}
export function* listTabSaga(action: any) {
  try {
    const { data }: IDataTab = yield getListTabApi();
    if (data.success === 1) {
      yield put(getListTabSuccess(data.data))
    } else {
      yield put(getListTabFailure(data.message))
    }
  }
  catch (error) {
    yield put(getListTabFailure(error as string))
  }
}
export function* watchListTabSaga() {
  yield takeLatest(types.GET_LIST_TAB_REQUEST, listTabSaga);
}