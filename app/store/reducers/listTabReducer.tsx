import * as types from '@store/actions/types';
import {
  IListTabRequest,
  IResponseListTabSuccess,
  IResponseListTabFailure,
} from '@models/actions/listTab';
interface IState {
  isLoading: boolean;
  data: any;
  error: string;
}
const initialState: IState = {
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
      return {
        ...state,
        isLoading: false,
        data: action,
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
