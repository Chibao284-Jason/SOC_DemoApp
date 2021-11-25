import { IDataResponseListNews, IResponseListTabSuccess, ISearchNewsActionsRequest, ISearchNewsParamsRequest } from "@models/actions/listNews";
import { IError, IErrorAction } from "@models/interface";
import * as types from "./types";
export const searchRequest = (params: ISearchNewsParamsRequest): ISearchNewsActionsRequest => ({
  type: types.SEARCH_REQUEST,
  params: params
})
export const searchSuccess = (data: IDataResponseListNews): IResponseListTabSuccess => ({
  type: types.SEARCH_SUCCESS,
  data: data
})
export const searchFailure = (error: any): IErrorAction => ({
  type: types.SEARCH_FAILURE,
  error: error.message
})
