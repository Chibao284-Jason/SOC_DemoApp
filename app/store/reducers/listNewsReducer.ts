import { IDataListNew, IListNewsActionsRequest, IResponseListTabSuccess } from "@models/actions/listNews";
import { IError, IErrorAction } from "@models/interface";
import * as types from "@store/actions/types";

export interface IListNewsReducer {
  isLoading: boolean,
  data: IDataListNew,
  error: string
}
const initialState: IListNewsReducer = {
  isLoading: false,
  data: {},
  error: ''
}

export const listNewsReducer = (state = initialState, action: IListNewsActionsRequest & IResponseListTabSuccess & IErrorAction) => {
  switch (action.type) {
    case types.GET_LIST_NEWS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.GET_LIST_NEWS_SUCCESS:
      let data = {}
      if (action.data.pages[">"] === 2) {
        data = { ...action.data }
      }
      else {
        data = { ...state.data, rows: [...state.data.rows, ...action.data.rows] }
      }

      return {
        ...state,
        isLoading: false,
        data: data

      };
    case types.GET_LIST_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state

  }

}
