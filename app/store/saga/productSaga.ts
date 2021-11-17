// import { put, takeLatest } from 'redux-saga/effects';
// import { IProductResponseState } from '@models/actions/product';
// import plants from "@constant/plants";
// import * as types from '@store/actions/types';
// import { getProductFailure, getProductSuccess } from '@store/actions/productActions';
// export function* productSaga(action: IProductResponseState) {
//   try {
//     const response = { success: true, data: plants, errorMessage: 'get fail' };
//     if (response.success) {
//       yield put(getProductSuccess(response.data))
//     } else {
//       yield put(getProductFailure(response.errorMessage))
//     }
//   } catch (error) {
//     yield put(getProductFailure(error))
//   }
// }

// export function* watchProduct() {
//   yield takeLatest(types.GET_PRODUCT_REQUEST, productSaga);
// }