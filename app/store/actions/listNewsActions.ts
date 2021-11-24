import { IListNewsParamsRequest, IDataResponseListNews, IListNewsActionsRequest, IResponseListTabSuccess } from "@models/actions/listNews";
import { IError, IErrorAction } from "@models/interface";
import * as types from "./types";

export const getListNewsRequestActions = (params: IListNewsParamsRequest): IListNewsActionsRequest => ({
  type: types.GET_LIST_NEWS_REQUEST,
  params: params
})
export const getListNewsSuccessActions = (data: IDataResponseListNews): IResponseListTabSuccess => ({
  type: types.GET_LIST_NEWS_SUCCESS,
  data: data
})
export const getListNewsFailureActions = (error: IError): IErrorAction => ({
  type: types.GET_LIST_NEWS_FAILURE,
  error: error.message
})

// GET MORE LIST
export const getMoreListNewsRequestActions = (params: IListNewsParamsRequest): IListNewsActionsRequest => ({
  type: types.GET_LIST_NEWS_REQUEST,
  params: params
})
export const getMoreListNewsSuccessActions = (data: IDataResponseListNews): IResponseListTabSuccess => ({
  type: types.GET_LIST_NEWS_SUCCESS,
  data: data
})
export const getMoreListNewsFailureActions = (error: IError): IErrorAction => ({
  type: types.GET_LIST_NEWS_FAILURE,
  error: error.message
})
