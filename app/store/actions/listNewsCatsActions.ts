import { IDataResponseListNews, IListNewsActionsRequest, IResponseListTabSuccess, IListNewsCatsParamsRequest, IDataListNew } from "@models/actions/listNews";
import { IError, IErrorAction } from "@models/interface";
import * as types from "./types";


// GET CAT LIST
export const getCatsListNewsRequestActions = (params: IListNewsCatsParamsRequest): IListNewsActionsRequest => ({
  type: types.GET_CATS_LIST_NEWS_REQUEST,
  params: params
})
export const getCatsListNewsSuccessActions = (data: IDataListNew): IResponseListTabSuccess => ({
  type: types.GET_CATS_LIST_NEWS_SUCCESS,
  data: data
})

export const getCatsListNewsFailureActions = (error: any): IErrorAction => ({
  type: types.GET_CATS_LIST_NEWS_FAILURE,
  error: error.message
})

export const getMoreCatsListNewsRequestActions = (params: IListNewsCatsParamsRequest): IListNewsActionsRequest => ({
  type: types.GET_MORE_CATS_LIST_NEWS_REQUEST,
  params: params
})
export const getMoreCatsListNewsSuccessActions = (data: IDataListNew): IResponseListTabSuccess => ({
  type: types.GET_MORE_CATS_LIST_NEWS_SUCCESS,
  data: data
})
export const getMoreCatsListNewsFailureActions = (data?: any): IErrorAction => ({
  type: types.GET_MORE_CATS_LIST_NEWS_FAILURE,
  error: data
})