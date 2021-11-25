import { IDataResponseListNews, IListNewsActionsRequest, IResponseListTabSuccess, IListNewsCatsParamsRequest } from "@models/actions/listNews";
import { IError, IErrorAction } from "@models/interface";
import * as types from "./types";


// GET CAT LIST
export const getCatsListNewsRequestActions = (params: IListNewsCatsParamsRequest): IListNewsActionsRequest => ({
  type: types.GET_CATS_LIST_NEWS_REQUEST,
  params: params
})
export const getCatsListNewsSuccessActions = (data: IDataResponseListNews): IResponseListTabSuccess => ({
  type: types.GET_CATS_LIST_NEWS_SUCCESS,
  data: data
})

export const getCatsListNewsFailureActions = (error: any): IErrorAction => ({
  type: types.GET_CATS_LIST_NEWS_FAILURE,
  error: error.message
})

export const getMoreCatsListNewsSuccessActions = (data?: any): IResponseListTabSuccess => ({
  type: types.GET_MORE_CATS_LIST_NEWS_SUCCESS,
  data: data
})