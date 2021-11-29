import { IDataDetailNews, IDetailNewsActionsRequest, IDetailNewsActionsSuccess } from "@models/actions/getDetailNews";
import { IResponseListTabSuccess, ISearchNewsActionsRequest } from "@models/actions/listNews";
import { IError, IErrorAction } from "@models/interface";
import * as types from "@store/actions/types";

export interface IDetailNewsReducer {
  isLoading: boolean,
  dataDetailNews: IDataDetailNews,
  error: string
}
const initialState: IDetailNewsReducer = {
  isLoading: false,
  dataDetailNews: {} as IDataDetailNews,
  error: ''
}

export const detailNewsReducer = (state = initialState, action: IDetailNewsActionsRequest & IDetailNewsActionsSuccess & IErrorAction) => {
  switch (action.type) {
    case types.GET_DETAIL_NEWS_REQUEST:


      return {
        ...state,
        isLoading: true
      };
    case types.GET_DETAIL_NEWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataDetailNews: action.data

      };
    case types.GET_DETAIL_NEWS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state

  }

}
