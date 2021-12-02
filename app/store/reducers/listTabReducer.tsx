import * as types from '@store/actions/types';
import {
  IListTabRequest,
  IResponseListTabSuccess,
  IResponseListTabFailure,
} from '@models/actions/listTab';
export interface IListTabReducer {
  isLoading: boolean;
  data: any;
  error: string;
}
const initialState: IListTabReducer = {
  isLoading: false,
  data: [{}],
  error: '',
};

export const listTabReducer = (
  state = initialState,
  action: IListTabRequest & IResponseListTabSuccess & IResponseListTabFailure,
) => {
  switch (action.type) {
    case types.GET_LIST_TAB_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_LIST_TAB_SUCCESS:
      let home = {id: 10000, name: 'Trang chủ', parent: 0};
      let dataTemp = [home, ...action.data];
      return {
        ...state,
        isLoading: false,
        data: {data: dataTemp},
      };
    case types.GET_LIST_TAB_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
