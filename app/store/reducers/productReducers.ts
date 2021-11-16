import { IProductResponseState } from "@models/actions/product";
import { IProductState } from "@models/reducers/product";
import { IProduct } from "@models/api/product";
import * as types from '@store/actions/types';
const initialState: IProductState = {
  isLoading: false,
  data: [{} as IProduct],
  errorMessage: ''
}



export const productReducer = (state = initialState, action: IProductResponseState) => {
  switch (action.type) {
    case types.GET_PRODUCT_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_PRODUCT_SUCCESS:

      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case types.GET_PRODUCT_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.errorMessage,
      };

    default:
      return state

  }

}
