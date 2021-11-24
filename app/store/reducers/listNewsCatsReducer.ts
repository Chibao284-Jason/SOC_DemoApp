import { IDataListNew, IListNewsActionsRequest, IResponseListTabSuccess } from "@models/actions/listNews";
import { IError, IErrorAction } from "@models/interface";
import * as types from "@store/actions/types";

export interface IListNewsCatsReducer {
  isLoading: boolean,
  data: IDataListNew,
  error: string
}
const initialState: IListNewsCatsReducer = {
  isLoading: false,
  data: {},
  error: ''
}

export const listNewsCatsReducer = (state = initialState, action: IListNewsActionsRequest & IResponseListTabSuccess & IErrorAction) => {

  switch (action.type) {
    case types.GET_CATS_LIST_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CATS_LIST_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };
    case types.GET_CATS_LIST_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    default:
      return state

  }

}
