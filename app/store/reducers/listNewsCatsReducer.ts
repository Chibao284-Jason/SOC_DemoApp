import { IDataListNew, IListNewsActionsRequest, IResponseListTabSuccess } from "@models/actions/listNews";
import { IError, IErrorAction } from "@models/interface";
import * as types from "@store/actions/types";

export interface IListNewsCatsReducer {
  isLoading: boolean,
  isLoadingMore: boolean,
  data: IDataListNew,
  error: string
}
const initialState: IListNewsCatsReducer = {
  isLoading: false,
  isLoadingMore: false,
  data: {} as IDataListNew,
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
      let dataTemp = {}
      // if (action.data.pages[">"] === 2) {
      //   dataTemp = { ...action.data }
      // }
      // else {
      //   dataTemp = { ...state.data, rows: [...state.data.rows, ...action.data.rows] }
      // }
      return {
        ...state,
        isLoading: false,
        data: action.data,
        isLoadingMore: false,
      };
    case types.GET_CATS_LIST_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };
    case types.GET_MORE_CATS_LIST_NEWS_REQUEST:
      return {
        ...state,
        isLoadingMore: true,
      };
    case types.GET_MORE_CATS_LIST_NEWS_SUCCESS:
      let dataMore = {}
      if (action.data.pages[">"] === 2) {
        dataMore = { ...action.data }
      }
      else {
        dataMore = { ...state.data, rows: [...state.data.rows, ...action.data.rows] }
      }

      return {
        ...state,
        isLoadingMore: false,
        data: dataMore
      };
    case types.GET_MORE_CATS_LIST_NEWS_FAILURE:
      return {
        ...state,
        isLoadingMore: false,
        error: action.error
      };
    default:
      return state

  }

}
