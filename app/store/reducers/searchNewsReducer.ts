import { IDataListNew, IResponseListTabSuccess, ISearchNewsActionsRequest } from "@models/actions/listNews";
import { IError, IErrorAction } from "@models/interface";
import * as types from "@store/actions/types";

export interface ISearchNewsReducer {
  isLoading: boolean,
  dataSearch: IDataListNew,
  error: string
}
const initialState: ISearchNewsReducer = {
  isLoading: false,
  dataSearch: {},
  error: ''
}

export const searchNewsReducer = (state = initialState, action: ISearchNewsActionsRequest & IResponseListTabSuccess & IErrorAction) => {
  switch (action.type) {
    case types.SEARCH_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case types.SEARCH_SUCCESS:
      // let data = {}
      // if (action.data.pages[">"] === 2) {
      //   data = { ...action.data }
      // }
      // else {
      //   data = { ...state.data, rows: [...state.data.rows, ...action.data.rows] }
      // }

      return {
        ...state,
        isLoading: false,
        dataSearch: action.data

      };
    case types.SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state

  }

}
